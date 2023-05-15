# [Myth] Township

![Bug](images/question-mark.png)

This mod contains the following features:

## Fix Totals Count Bug

The totals displayed on individual buildings that generate population, happiness, education, storage and worship are incorrect. This fixes the bug by replacing the `BuildingInTownElement.updateBuildingTotals` function and correctly implements the building count.

This is purely a visual bug on the individual buildings and the underlying game logic is not modified. The totals displayed at the top of the Township page are correct, but if you add up the individual tiles across your town, they don't match the total at the top.

### Bug Description

The bug is that the total calculation for a building includes buildings from all biomes instead of just the biome the building is in.

For example:

* 100 Taverns in Grasslands = 50 Happiness
* 100 Taverns in Snowlands = 100 Happiness

However, this isn't what is displayed on the individual tiles

* Grasslands = 100 Happiness
* Snowlands = 200 Happiness

As you can see, the total calculates buildings from both biomes, and not just the individual biome.

With this fix, you can actually manually add up what is displayed on each tile and it will accurately match what is being applied to your town at the top of the page.

![Storage](images/storage.png)

![Happiness](images/happiness.png)

![Population Education](images/population-education.png)
