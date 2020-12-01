App Hierarchy:

App
|---FilteredList
        |
        |---Navigation
        |
        |---DisplayList
        |       |
        |       |---MyCard 
        |
        |---Aggregator
                |
                |---DisplayList
                        |
                        |---MyCard


Components:

The FilteredList is the most important componenet. It keeps track of all of the necessary state objects, 
such as the list of pokemon in its current filtered status, the pokemon currently in the aggregator, and 
the total weight of the pokemon. It also houses the main callback functions used by the three underlying 
components. 

The Navigation component is made up of 3 NavBars, and it reflects the current state of filtering and 
sorting.

The DisplayList displays the Cards, which I've aptly titled MyCards. It makes sure to display the list in
its currently filtered state. It is also reused in the Aggreagtor, though slightly differently.

The Aggregator is our shopping cart. It implements its own DisplayList, which displays a different variant
of the MyCard component. It renders based on the list of pokemon currently in the aggregator (which is housed 
in the FilteredList)

Passing Data:

As I mentioned above, most of the data is housd in FilteredList's state. Many callback fucntion are also 
housed in FilteredList. Relevant data and functions are passed down by FilteredList to its children via 
props.

User Interaction:

In this app, the user can alter the state in Componenets in 3 ways. (1) They can change the current filter 
or sorting method. (2) They can add pokemon to the Aggreagtor. (3) They can remove pokemon from the Aggreagtor.


