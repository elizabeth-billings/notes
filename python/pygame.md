# Sources
- [Pygame Docs](https://www.pygame.org/docs/)
- [Boot.Dev](https://www.boot.dev)

# Constants
Create a separate module to hold constants in, such as for screen width and height. 

# init
Initialize pygame 
```python
pygame.init 
```

# set_mode 
Create a GUI with a given height and width
```python
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
```

# Game Loop
A game loop is the repeating cycle that keeps a game running. At it's most simple, it is: 
1. Read player inputs
2. Update the game world
3. Draw the updated game world on the screen
4. Go back to 1
For a game to actually be playable (or at least enjoyable), this needs to happen many times per second.

## Event Queue 
```python
while True:
        log_state()

        for event in pygame.event.get():
            # Check if game has been closed
            if event.type == pygame.QUIT:
                return

            # Game loop logic
            screen.fill("black")

            # Update display
            pygame.display.flip()
```

