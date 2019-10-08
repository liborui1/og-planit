|                                                                                                             User Story                                                                                                             | Priority | Story Points (Uses Fibonacci Sequence)|                                                                                                                                  Criteria of Satisfaction                                                                                                                                 |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------:|:------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 01 - As a user, I want to be able to construct an itinerary by selecting events/locations from a list. When doing so I want to see a short description of the event, along with location, cost per person, and typical time spent. | 1        | 13            | User is able to choose events from a list of options and construct an itinerary. When user is selecting events from the list, it displays a short description, location, cost per person, and typical time spent.                                                                         |
| 02 - As a user, I want to be able to filter events when constructing an itinerary by price, category, distance from me, and time frame.                                                                                            | 2        | 3           | When selecting events for an itinerary, user is able to apply filters on price, category, distance, and time frame.                                                                                                                                                                       |
| 03 - As a user, I want to be able to select an itinerary I have created to follow, and to see all locations in the itinerary on a map, as well as the most ideal route between them.                                               | 3      | 21        | After creating an itinerary, user is able to select it to follow. This prevents modification to the plan and causes all locations to be displayed on a map, along with a route between them in real time.                                                                                 |
| 04 - As a user, I want the itinerary I am following to sync to my phone's calendar app so that I receive notifications 20 minutes prior to each scheduled event with its time and location.                                        | 4        | 21           | When user selects itinerary to follow, app creates calendar event for each scheduled event on their phone with a short description, time, and location of each event.                                                                                                                     |
| 05 - As a user, I want to be able to set personal preferences for the types of event I am interested in, so that I receive recommendations for events near me that are tailored towards me.                                        | 5        | 8            | User is able to set preferences for themselves in the categories of price range and distance from them. They are also able to add types of event they are most interested in into a list. Data should be saved locally so it persists for the user even if they don't have an account.    |
| 06 - As a user, if I am not following an itinerary, I want to see a list of suggestions for events near me when I open the app.                                                                                                    | 6        | 8            | If user is not following itinerary, when they open the application they should see a short list of suggested events near their current location.                                                                                                                                          |
| 07 - As a user, I want to be able to see my past itineraries and re-follow them if none of the events in them have expired.                                                                                                        | 7        | 5            | All itineraries created on a device should be stored locally so that they can be accessed by the user. These stored itineraries should be re-createable unless the time frame for the events has passed.                                                                                  |
| 08 - As a user, I want to be able to create an account with an email and password, and log in to the app.                                                                                                                          | 8        | 0            | Optional login page when the app first starts. Blocks to input user name and password, as well as a "Sign Up" button to allow the user to create a new account.                                                                                                                           |
| 09 - As a user with an account, I want to be able to reset my password without logging in in case I forget it.                                                                                                                     | 9        | 21            | Have a "Forgot Password" button on login screen that when clicked, asks the user to input their email address. Then send password reset link to their email.                                                                                                                              |
| 10 - As a user with an account, I want my itinerary history and preferences to be bound to my account so that I can access that data whenever I log in to a device.                                                                | 10       | 3            | User with account should be able to log in on a device they have never accessed the app on before, and see their itinerary history and preferences.                                                                                                                                       |
| 11 - As a user who has created an itinerary, I want to be able to generate a URL that will share my itinerary with other mobile devices, even if they do not have the app.                                                         | 11       | 13           | Once user has created itinerary, they are able to generate a URL link to a calendar that contains the time, date, location, description, and cost of each event in that itinerary. If another user clicks the URL, they should have the entire itinerary added to their phone's calendar. |
| 12 - As a user who is following an itinerary, I want to be able to label events with different colors and symbols on my map.                                                                                                       | 12       | 5            | User can add colors n shit.                                                                                                                                                                                                                                                               |