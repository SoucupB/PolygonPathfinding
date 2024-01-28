# BoringPathfinding

This document presents a simple algorithm for a pathfinding algorithm done for non-degenerate polygons.
![image](https://github.com/SoucupB/BoringPathfinding/assets/49458226/4be0a686-b3ac-4679-8dc8-62dee7a4486f)

Here is a simple example of a drawn polygon.
And here is a simple path for it.

![image](https://github.com/SoucupB/BoringPathfinding/assets/49458226/3f51d903-f652-409c-af97-ad6d25749d47)

# API
In order to make a searcher we first need to declare a polygon.
```javascript
const { Point, Polygon, Search } = require('polygon-pathfinding');

let polygon = new Polygon();

// Push points from a polygon.
polygon.push(0, 0);
polygon.push(5, 0);
polygon.push(5, 5);
polygon.push(2, 5);
polygon.push(2, 3);
polygon.push(0, 3);
polygon.closePolygon();

polygon.triangulate();

let searcher = new Search(polygon);

// This will return a path of points that will represent a path between (0.3, 2.7) and (2.4, 4.5).
console.log(searcher.getPointsPath(new Point(0.3, 2.7), new Point(2.4, 4.5)))
```

And the graphical representation of this path is this

![image](https://github.com/SoucupB/PolygonPathfinding/assets/49458226/f7f83278-0361-4bcc-b5e5-06031e06d2f5)
