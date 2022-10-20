student = {
    'name': 'Maria',
    'course': 'SEI',
    'current_week': 7
}

where_my_things_are = {
    "shoes": "shoe stand",
    "remote": "near tv"
}
for key, val in where_my_things_are.items():
    print(f"My {key} is kept in {val}")


scores = [{
    'name': 'Mark',
    'points': 12  # points the player scored
},
    {
    'name': 'Henry',
    'points': 15
},
    {
    'name': 'Frnaco',
    'points': 19
}
]
for player in scores:
    print(f"{player['name']} scored {player['points']} points")

