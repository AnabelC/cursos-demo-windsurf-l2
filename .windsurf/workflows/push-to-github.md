---
description: Este workflow nos ayudara a hacer commit y pushear nuestros cambios a github
auto_execution_mode: 1
---

# título: Flujo de Commit y Push en Git
# descripción: Guía al usuario a través de un flujo tí­pico de Git -revisar el estado, preparar (staging), hacer commit y hacer push - con puntos de control para confirmación del usuario en cada paso.

## Paso 1: Verificar el estado de Git

Ejecuta el siguiente comando:

```bash
git status
```

## Paso 2: Preguntar si deseas continuar

Pregunta:

> ¿Quieres continuar con la preparación de los cambios? (sí/no)

- Si **sí**, continúa al Paso 3.  
- Si **no**, finaliza el flujo de trabajo.  

## Paso 3: Preparar todos los cambios

Ejecuta el siguiente comando:

```bash
git add .
```

## Paso 4: Preguntar si deseas hacer commit

Pregunta:

> ¿Quieres hacer commit de los cambios ahora? (sí­/no)

- Si **sí**, continua al Paso 5.  
- Si **no**, finaliza el flujo de trabajo.  

## Paso 5: Obtener mensaje de commit

Pregunta:

> Por favor, ingresa tu mensaje de commit:

Luego ejecuta:

```bash
git commit -m "<user-input>"
```

## Paso 6: Preguntar si deseas hacer push

Pregunta:

> ¿Quieres hacer push del commit al repositorio remoto? (sí/no)

- Si **sí**, continúa al Paso 7.  
- Si **no**, finaliza el flujo de trabajo.  

## Paso 7: Hacer push al repositorio remoto

Ejecuta el siguiente comando:

```bash
git push
```