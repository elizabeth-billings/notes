# Sources
- [Pygame Docs](https://www.pygame.org/docs/)
- [Boot.Dev](https://www.boot.dev)

# Run game (using uv) 
```bash
$ uv run main.py
```

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

# Delta Time 
In game development, delta time is the amount of time that has passed since the last frame was drawn. This can decouple the game's speed from the speed it's been drawn to the screen. This means that the game won't slow down or speed up when the computer that it's running on CPU slows down or speeds up. 

## Set FPS 
A clock is an object to help track time. It should be updated (with tick or tick_busy_loop, which compute how many milliseconds have passed since the last call) once per frame. 

```python
# After initializing pygame but before game loop starts
clock = Clock()
delta_time = 0.0
FPS = 60 
```

```python
# at the end of each game loop iteration
dt = clock.tick(FPS) / 1000
```

# Sprite
Sprite is the base class for visible game objects. You can create things like basic shapes for hitboxes (like cirlces or rectangles) that inherit from the sprite class, and then have more specific classes (such as one for player or enemies) inherit from those. 

## Move Player Sprite
```python
def update(self, delta_time):
        keys = pygame.key.get_pressd()

        if keys[pygame.K_a]:
                self.rotate(-delta_time)
        if keys[pygame.K_d]:
                self.rotate(delta_time)
        if keys[pygame.K_w]:
                self.move(delta_time)
        if keys[pygame.K_s]:
                self.move(delta_time) 

```

# Groups
