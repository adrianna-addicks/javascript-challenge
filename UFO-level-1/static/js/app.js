{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "// from data.js\n",
    "var tableData = data;\n",
    "console.log(tableData);\n",
    "\n",
    "// Get a reference to the table body\n",
    "var tbody = d3.select(\"tbody\");\n",
    "\n",
    "// UFO Sighting values for each column\n",
    "tableData.forEach(function(ufoSighting) {\n",
    "    console.log(ufoSighting);\n",
    "    // Append one table row `tr` for each UFO Sighting object\n",
    "    var row = tbody.append(\"tr\");\n",
    "\n",
    "    // Use `Object.entries` to console.log each UFO Sighting value\n",
    "    Object.entries(ufoSighting).forEach(function([key, value]) {\n",
    "      console.log(key, value);\n",
    "      // Append a cell to the row for each value\n",
    "      var cell = row.append(\"td\");\n",
    "      cell.text(value);\n",
    "    });\n",
    "  });\n",
    "\n",
    "\n",
    "// Select the button\n",
    "var button = d3.select(\"#filter-btn\");\n",
    "button.on(\"click\", function() {\n",
    "\n",
    "    tbody.html(\"\");\n",
    "\n",
    "    // Select the input date get the raw HTML nodes\n",
    "    var inputElement = d3.select(\"#datetime\");\n",
    "    // Get the value property of the input date, state, shape\n",
    "    var inputValue = inputElement.property(\"value\");\n",
    "    // console.log input value\n",
    "    console.log(inputValue);\n",
    "    // Filter Data with datetime equal to input value\n",
    "    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);\n",
    "    // console.log filter values\n",
    "    console.log(filteredData);\n",
    "\n",
    "\n",
    "    filteredData.forEach(function(selections) {\n",
    "\n",
    "    console.log(selections);\n",
    "    // Append one table row `tr` for each UFO Sighting object\n",
    "    var row = tbody.append(\"tr\");\n",
    "    // Use `Object.entries` to console.log each UFO Sighting value\n",
    "    Object.entries(selections).forEach(function([key, value]) {\n",
    "        console.log(key, value);\n",
    "        // Append a cell to the row for each value\n",
    "        var cell = row.append(\"td\");\n",
    "        cell.text(value);\n",
    "    });\n",
    "});\n",
    "});"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.8.5"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 4
}
