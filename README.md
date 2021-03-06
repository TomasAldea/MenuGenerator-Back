# Menu Generator

## Descripción 

### Esta aplicación trata de cubrir las necesidades organizativas en la planificación de menús semanales para pequeños negocios gastronómicos o para uso particular.

## Historias de usuarios

* Registrarse: como usuario puedo registrarme para empezar a crear mi contenido
* Inicio de sesión: Como usuario, puedo iniciar sesión en la aplicación para poder administrar mi perfil.
* Cerrar sesión: como usuario, puedo cerrar la sesión de la aplicación para que nadie más pueda usarla.
* Ver recetas: Como usuario, quiero ver todas las recetas disponibles.
* Agregar recetas: Como usuario puedo agregar recetas.
* Editar recetas: Como usuario puedo Editar recetas.
* Eliminar recetas: Como usuario puedo Eliminiar recetas.
* Ver perfil de usuario: Como usuario puedo ver mi perfil
* Editar perfil de usuario: Como usuario puedo editar mi perfil


## Extras

* 

### Cliente / Frontend

| Ruta          | Componente            | Permisos  | Comportamiento                                         | 
| ------------- |:---------------------:| --------- |:------------------------------------------------------:|
| /             | Página principal      | público   |Página de inicio                                        | 
|/signup        | Página registro           |           |Formulario de registro                                  |
|/login         | Inicio de sesión      |           |Formulario de inicio de sesión                          |
|/recipe/add    | Agregar receta        | Privado   |Formulario para añadir receta                           |
|/recipe/:id    | Filtrar por receta    | Privado   |filtrado por receta con detalles                        |
|/profile       | Página de perfil      | Privado   |Perfil de usuario con menus semanales y recetas creadas |
|/menu       | Página de menu      | Privado   |  |


## Servicios

* Servicio de autenticación

   - authApi.login (usuario)
   - authApi.signup (usuario)
   - authApi.logout ()

* Servicio de recetas 

   - recipesApi.list()
   - recipesApi.addRecipe (recipe)
   - recipesApi.getRecipeDetails (recipeId)
   - recipesApi.editRecipe (recipeId, recipeBody)
   - recipesApi.deleteRecipe (recipeId)

* Servicio de menus

   - menuApi.randomMenu(menuBody)
   - menuApi.getMenu()
   - menuApi.editMenu(menuId, menuBody)

### Servidor / Backend

## Modelos

# Modelo usuario
```
{
  username: {type: String, required: true },
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  recipes: [ { type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ]
  menu: [ { type: mongoose.Schema.Types.ObjectId, ref: "menu" } ]
}
```
# Modelo Receta
```
{
  name: String,
  description: String,
  category: array,
  ingredients: [],
  owner: [ { type: mongoose.Schema.Types.ObjectId, ref: "user" } ],
},
```
# Modelo menu
```
{
monday: monday: {
 primeros: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ],
 segundos: [ { type: mongoose.Schema.Types.ObjectId, ref: "recipe" }],
 postres: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ],
},
tuesday: monday: {
 primeros: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ],
 segundos: [ { type: mongoose.Schema.Types.ObjectId, ref: "recipe" }],
 postres: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ],
},
wednesday: monday: {
 primeros: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ],
 segundos: [ { type: mongoose.Schema.Types.ObjectId, ref: "recipe" }],
 postres: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ],
},
thursday: monday: {
 primeros: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ],
 segundos: [ { type: mongoose.Schema.Types.ObjectId, ref: "recipe" }],
 postres: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ],
},
friday: monday: {
 primeros: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ],
 segundos: [ { type: mongoose.Schema.Types.ObjectId, ref: "recipe" }],
 postres: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ],
},
saturday: monday: {
 primeros: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ],
 segundos: [ { type: mongoose.Schema.Types.ObjectId, ref: "recipe" }],
 postres: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ],
},
sunday: monday: {
 primeros: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ],
 segundos: [ { type: mongoose.Schema.Types.ObjectId, ref: "recipe" }],
 postres: [{ type: mongoose.Schema.Types.ObjectId, ref: "recipe" } ],
},

owner:  { type: mongoose.Schema.Types.ObjectId, ref: "user" } ,
},
```
### API Endpoints (rutas backend)

| HTTP Method         | URL            | Request Body  | Success status                                        |  Error Status  | Description  |
| ------------- |:---------------------:| --------- |:------------------------------------------------------: | :--------------: |:---------------------: |
| POST         | /auth/signup      | {username, email, password}  |201                                      | 404    | 	Verifica si los campos no están vacíos (422) y el usuario no existe (409), luego crea un usuario con contraseña cifrada y almacena el usuario en la sesión   |
| POST | /auth/login | {email, password} | 200 | 401 | Comprueba si los campos no están vacíos (422), si el usuario existe (404) y si la contraseña coincide (404), almacena al usuario en la sesión. |
| POST | /auth/logout | (vacio) | 204 | 400 | Cierra la sesión del usuario |
| GET | /api/recipes |  |  | 400 | Servir todas las recetas |
| GET | /api/recipes/:recipeId | {id} |  |  | Servir una receta en concreto |
| POST | /api/recipe | 	{title, description, ingredients} | 201 | 400 | Crea y guarda una nueva receta |
| PUT | /api/recipe/:recipeId | {title, description, ingredients} | 200 | 400 | Edita una receta |
| DELETE | /api/recipe/:recipeId | {id} | 201 | 400 | Elimina una receta |
| POST | /api/menu | {cantidad de primeros platos, cantidad de segundos platos, cantidad de postres, que dias de la semana } | 200 | 404 | Crea una nueva semana de menus con recetas aleatorias |
| get | /api/menu/:menuId | {id} | 201 | 400 | Sirve el menu especificado |
### Reserva
| HTTP Method         | URL            | Request Body  | Success status                                        |  Error Status  | Description  |
| ------------- |:---------------------:| --------- |:------------------------------------------------------: | :--------------: |:---------------------: |
| PUT | /api/menu/:menuId | {recipeId} | 200 | 400 | Agrega una receta manualmente al menu semanal |
| DELETE | /api/menu/:menuId | {recipeId} | 200 | 400 | Elimina una receta manualmente al menu semanal |

# Links

### Git

[FrontEnd repository](https://github.com/TomasAldea/MenuGenerator-Front)

[BackEnd repository](https://github.com/TomasAldea/MenuGenerator-Back)

### Slides

[Go to slides](https://docs.google.com/presentation/d/137A_nqi967l913VkzPaCJy2Ddk5FsvsaW0PEuKLcxJY/edit#slide=id.p)

![coocking](https://media1.giphy.com/media/ZeRYb8bhr6NbO6lac0/giphy.gif)