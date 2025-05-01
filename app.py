# pip install flask-sqlalchemy
# are used to make changes in database through python
import requests
from flask import jsonify
from werkzeug.security import generate_password_hash,check_password_hash
from flask import Flask, render_template, redirect, url_for, request, flash,session
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///User.db"
app.config['SECRET_KEY'] = 'your_secret_key'  # Secret key for session management
db = SQLAlchemy(app)





user_favorites = db.Table('user_favorites',
    db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('recipe_id', db.Integer, db.ForeignKey('recipe.id'), primary_key=True)
)

# Database setup - Define the User and Recipe models (Only ONCE)
class User(UserMixin, db.Model):  # REMOVED DUPLICATE
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False) 
    name = db.Column(db.String(80), nullable=False)
    password = db.Column(db.String(120), nullable=False)



    favorite_recipes = db.relationship('Recipe', secondary=user_favorites, backref=db.backref('users', lazy='dynamic'))

class Recipe(db.Model):  # REMOVED DUPLICATE
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    ingredients = db.Column(db.String(500))
    instructions = db.Column(db.Text)
    image_url = db.Column(db.String(200))
    description = db.Column(db.Text, nullable=False) 
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)



# Create database tables
with app.app_context():
    # db.drop_all()  # WARNING: This will delete all data!
    db.create_all()



# Login manager setup
login_manager = LoginManager(app)
login_manager.login_view = 'login'

@login_manager.user_loader
def load_user(user_id):
    return db.session.get(User,int(user_id))


# Routes
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['user_email']
        password = request.form['user_password']
        user = User.query.filter_by(email=email).first()
        if user and check_password_hash(user.password, password):
         
           login_user(user, remember=True)  # ✅ Keep session active
           db.session.commit() 
           return redirect(url_for('profile'))
        
        # login_user(user,remember=remember)
        print('Login Unsuccessful. Please check username and password', 'danger')
        flash('Login Unsuccessful. Please check username and password', 'danger')
        
    return render_template('login.html')


@app.route('/logout')
def logout():
    logout_user()
    return redirect(url_for('home'))

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form.get('name') 
        email = request.form['user_email']
        password = request.form['user_password']

        if not name or not email or not password:
            flash('All fields are required!', 'danger')
            print("🔴 Missing fields, redirecting to register")  # Debugging Step 3
            return redirect(url_for('register'))
        
        

        if User.query.filter_by(email=email).first():
            flash('Username already exists', 'danger')
            print("🔴 Email already exists, redirecting to register")  # Debugging Step 4
            return redirect(url_for('register'))
        
        hashed_password = generate_password_hash(password)
        new_user = User(name=name ,email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        print("✅ User registered successfully!")
        flash('Account created!', 'success')
        return redirect(url_for('login'))
    print("🟢 Register page rendered") 
    return render_template('register.html')

@app.route('/profile')
@login_required
def profile():
    user = current_user
    favorites = user.favorite_recipes
    return render_template('profile.html',favorites=favorites, name=current_user.name)

@app.route('/add_favorite', methods=['POST'])
@login_required
def add_favorite():
    data = request.get_json(silent=True)
    if data and 'recipe_id' in data:
        recipe_id = data['recipe_id']
    else:
        recipe_id = request.args.get('recipe_id')
    
    if not recipe_id:
        return jsonify({"message": "Recipe ID is missing", "success": False}), 400
 
    recipe = db.session.get(Recipe, recipe_id)
    if not recipe:
        meal_url = f"https://www.themealdb.com/api/json/v1/1/lookup.php?i={recipe_id}"
        response = requests.get(meal_url)
        meal_data = response.json()
        if meal_data["meals"]:
            meal = meal_data["meals"][0]
            recipe = Recipe(
                id=recipe_id,
                name=meal["strMeal"],
                ingredients=meal.get("strIngredients", ""),
                instructions=meal.get("strInstructions", ""),
                description=meal["strMeal"],
                image_url=meal["strMealThumb"],
                user_id=current_user.id
            )
            db.session.add(recipe)
            db.session.commit()

    if not recipe:
        return jsonify({"message": "Recipe not found", "success": False}), 404

    if recipe in current_user.favorite_recipes:
        return jsonify({"message": "Recipe already in favorites", "success": False}), 400

    current_user.favorite_recipes.append(recipe)
    db.session.commit()
    return jsonify({"message": "Recipe added to favorites", "success": True}), 200



@app.route('/search-results', methods=['GET', 'POST'])
def search_results():
    search_query = request.form.get('ingredientInput') if request.method == 'POST' else request.args.get('query')
    if search_query:
        try:
            url = f"https://www.themealdb.com/api/json/v1/1/search.php?s={search_query}"
            response = requests.get(url)
            response.raise_for_status()  # Raise an exception for bad status codes
            data = response.json()
            meals = data.get("meals", [])
            return render_template('search_results.html', meals=meals, search_query=search_query)
        except requests.RequestException as e:
            return render_template('search_results.html', meals=None, search_query=search_query, message=f"Error fetching recipes: {str(e)}")
    return render_template('search_results.html', meals=None, search_query=None, message="Please enter a search term.")

  # Redirect to profile instead

@app.route('/remove_favorite/<int:recipe_id>', methods=['POST'])
@login_required
def remove_favorite(recipe_id):
    recipe = db.session.get(Recipe, recipe_id)


    if not recipe:
        flash("Recipe not found!", "danger")
        return redirect(url_for('show_favorites'))

    if recipe in current_user.favorite_recipes:
        current_user.favorite_recipes.remove(recipe)
        db.session.commit()
        flash("Recipe removed from favorites!", "success")
    
    return redirect(url_for('show_favorites'))


@app.route('/favorites')
@login_required
def show_favorites():
    favorites = current_user.favorite_recipes
    print(f"User: {current_user.name}, Favorites: {[r.name for r in favorites]}")
    return render_template('favorites.html', favorites=favorites)





    
@app.route('/',endpoint='home')
def home():
   return render_template('index.html')

# @app.route('/two')
# def two():
#     return render_template('two.html')
# @app.route('/meals')
# def get_meals(country):
#     url = f"https://www.themealdb.com/api/json/v1/1/filter.php?a={country}"
#     response = requests.get(url)
#     data = response.json()

#     if data["meals"]:
#         return render_template('meals.html', meals=data["meals"], country=country)
#     else:
#         return render_template('meals.html', meals=[], country=country, message="No recipes found!")
    




@app.route('/meals')
@login_required  # Ensures the user is logged in
def get_meals():
    country = request.args.get('country', 'Indian')
    url = f"https://www.themealdb.com/api/json/v1/1/filter.php?a={country}"
    response = requests.get(url)

    favorite_recipes = current_user.favorite_recipes  # Fetch user favorites

    if response.status_code == 200:
        data = response.json()
        return render_template('meals.html', 
                               meals=data.get("meals", []), 
                               country=country, 
                               favorite_recipes=favorite_recipes)
    else:
        return render_template('meals.html', 
                               meals=[], 
                               country=country, 
                               favorite_recipes=favorite_recipes, 
                               message="Error fetching recipes.")



@app.route('/meal-details/<meal_id>')
def meal_details(meal_id):
    meal_url = f"https://www.themealdb.com/api/json/v1/1/lookup.php?i={meal_id}"
    response = requests.get(meal_url)
    meal_data = response.json()

    if meal_data["meals"]:
        return render_template('meal_details.html', meal=meal_data["meals"][0])
    else:
        return render_template('meal_details.html', meal=None, message="Meal not found!")



@app.route('/nutrition_info')
def nutrition_info():
    return render_template('nutrition.html')

@app.route('/about')
def about():
    return render_template('about.html')




if __name__ == '__main__':
    app.run(debug=True)







# chrome://password-manager/settings


