// Fetch all plants (for the index page)
export async function fetchPlants() {
    const res = await fetch('http://localhost:1337/api/plants');
    const data = await res.json();
    return data.data.map(item => ({
        id: item.id,
        binomialName: item.binomialName,
        commonName: item.commonName,
        slug: item.slug,
        wikipediaPhotoLink: item.wikipediaPhotoLink
    }));
}

// Fetch a single plant by its slug (for the detail page)
export async function fetchPlantBySlug(slug) {
    const res = await fetch(`http://localhost:1337/api/plants?filters[slug][$eq]=${slug}`);
    const data = await res.json();
    if (!data.data || data.data.length === 0) {
        throw new Error(`No plant found with slug: ${slug}`);
    }
    const plant = data.data[0];
    return {
        id: plant.id,
        binomialName: plant.binomialName,
        commonName: plant.commonName,
        slug: plant.slug,
        description: plant.description,
        wikipediaPhotoLink: plant.wikipediaPhotoLink,
        // Collect the six photo links into an array.
        photoLinks: [
            plant.link1 || "",
            plant.link2 || "",
            plant.link3 || "",
            plant.link4 || "",
            plant.link5 || "",
            plant.link6 || ""
        ].filter(link => link) // remove empty strings
    };
}
