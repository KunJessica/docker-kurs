print("Lass uns einen BMI berechnen")

height = float(input("Bitte gib deine Körpergröße in Metern an (z.B 1.75):"))
weight = float(input("Bitte gib dein Körpergewicht in Kilogramm an (z.B 80):"))

bmi = weight / height ** 2

print("Dein BMI ist: " + str(bmi))