# BoringPathfinding

This document presents a simple algorithm for a pathfinding algorithm done for non-degenerate polygons.
![image](https://github.com/SoucupB/BoringPathfinding/assets/49458226/4be0a686-b3ac-4679-8dc8-62dee7a4486f)

Here is a simple example of a drawn polygon.
And here is a simple path for it.

![image](https://github.com/SoucupB/BoringPathfinding/assets/49458226/3f51d903-f652-409c-af97-ad6d25749d47)

# API
In order to make a searcher we first need to declare a polygon.
```javascript
let polygon = new Polygon();

polygon.push(0, 0); // y, x
polygon.push(0, 5);
polygon.push(5, 5);
polygon.push(5, 0);
polygon.closePolygon(); // Creates a line to the first point in order to close it.
```

Now we need a searcher object
```javascript
polygon.triangulate(); // This will triangulate the polygon (effectivelly creating a navmesh).

let searcher = new Search(polygon);
searcher.getPointsPath(new Point(0, 1), new Point(0, 2)); // returns a list of points of type [new Point(y1, x1), new Point(y2, x2), ....] which will be the found path.
```
