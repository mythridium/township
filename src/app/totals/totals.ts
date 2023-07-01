export class Totals {
    constructor(private readonly context: Modding.ModContext) {}

    public init() {
        this.context.onInterfaceReady(() => {
            this.context
                .patch(BuildingInTownElement, 'updateBuildingTotals')
                .replace(function (_original, building, township) {
                    const biome = township.currentTownBiome;

                    if (biome === undefined) {
                        return;
                    }

                    const elements = [];
                    const totals = {
                        population: 0,
                        education: 0,
                        happiness: 0,
                        storage: 0,
                        worship: 0
                    };

                    building.upgradeChain.forEach((b, index) => {
                        if (index <= building.upgradePosition) {
                            const count = biome.getBuildingCount(b);

                            if (township.getPopulationProvidesForBiome(b, biome) !== 0) {
                                totals.population += township.getPopulationProvidesForBiome(b, biome) * count;
                            }
                            if (township.getStorageProvidesForBiome(b, biome) !== 0) {
                                totals.storage += township.getStorageProvidesForBiome(b, biome) * count;
                            }
                            if (township.getEducationProvidesForBiome(b, biome) !== 0) {
                                totals.education += township.getEducationProvidesForBiome(b, biome) * count;
                            }
                            if (township.getHappinessProvidesForBiome(b, biome) !== 0) {
                                totals.happiness += township.getHappinessProvidesForBiome(b, biome) * count;
                            }
                            if (township.getWorshipProvidesForBiome(b, biome) !== 0) {
                                totals.worship += township.getWorshipProvidesForBiome(b, biome) * count;
                            }
                        }
                    });

                    if (totals.population !== 0) {
                        elements.push(this.createTotalElement(townshipIcons.population, Math.floor(totals.population)));
                    }

                    if (totals.storage !== 0) {
                        elements.push(this.createTotalElement(townshipIcons.storage, Math.floor(totals.storage)));
                    }

                    if (totals.education !== 0) {
                        elements.push(this.createTotalElement(townshipIcons.education, Math.floor(totals.education)));
                    }

                    if (totals.happiness !== 0) {
                        elements.push(
                            `<li class="mr-2"><img class="skill-icon-xs mr-1" src="${
                                townshipIcons.happiness
                            }" />${numberWithCommas(Math.floor(totals.happiness))}</li>`
                        );
                    }

                    if (totals.worship !== 0) {
                        elements.push(this.createTotalElement(townshipIcons.worship, Math.floor(totals.worship)));
                    }

                    this.buildingTotals.innerHTML = elements.join('');
                });
        });
    }
}
