module.exports = {
        typeDefs: /* GraphQL */ `type Ability {
  name: String
  url: String
}

type AbilityConnection {
  pageInfo: PageInfo!
  edges: [AbilityEdge]!
  aggregate: AggregateAbility!
}

input AbilityCreateInput {
  name: String
  url: String
}

input AbilityCreateManyInput {
  create: [AbilityCreateInput!]
}

type AbilityEdge {
  node: Ability!
  cursor: String!
}

enum AbilityOrderByInput {
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AbilityPreviousValues {
  name: String
  url: String
}

input AbilityScalarWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [AbilityScalarWhereInput!]
  OR: [AbilityScalarWhereInput!]
  NOT: [AbilityScalarWhereInput!]
}

type AbilitySubscriptionPayload {
  mutation: MutationType!
  node: Ability
  updatedFields: [String!]
  previousValues: AbilityPreviousValues
}

input AbilitySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AbilityWhereInput
  AND: [AbilitySubscriptionWhereInput!]
  OR: [AbilitySubscriptionWhereInput!]
  NOT: [AbilitySubscriptionWhereInput!]
}

input AbilityUpdateManyDataInput {
  name: String
  url: String
}

input AbilityUpdateManyInput {
  create: [AbilityCreateInput!]
  deleteMany: [AbilityScalarWhereInput!]
  updateMany: [AbilityUpdateManyWithWhereNestedInput!]
}

input AbilityUpdateManyMutationInput {
  name: String
  url: String
}

input AbilityUpdateManyWithWhereNestedInput {
  where: AbilityScalarWhereInput!
  data: AbilityUpdateManyDataInput!
}

input AbilityWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [AbilityWhereInput!]
  OR: [AbilityWhereInput!]
  NOT: [AbilityWhereInput!]
}

type AggregateAbility {
  count: Int!
}

type AggregateForm {
  count: Int!
}

type AggregateGameIndex {
  count: Int!
}

type AggregateItem {
  count: Int!
}

type AggregateMove {
  count: Int!
}

type AggregatePokemon {
  count: Int!
}

type AggregateSpecies {
  count: Int!
}

type AggregateSprite {
  count: Int!
}

type AggregateStat {
  count: Int!
}

type AggregateType {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Form {
  name: String
  url: String
}

type FormConnection {
  pageInfo: PageInfo!
  edges: [FormEdge]!
  aggregate: AggregateForm!
}

input FormCreateInput {
  name: String
  url: String
}

input FormCreateManyInput {
  create: [FormCreateInput!]
}

type FormEdge {
  node: Form!
  cursor: String!
}

enum FormOrderByInput {
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FormPreviousValues {
  name: String
  url: String
}

input FormScalarWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [FormScalarWhereInput!]
  OR: [FormScalarWhereInput!]
  NOT: [FormScalarWhereInput!]
}

type FormSubscriptionPayload {
  mutation: MutationType!
  node: Form
  updatedFields: [String!]
  previousValues: FormPreviousValues
}

input FormSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FormWhereInput
  AND: [FormSubscriptionWhereInput!]
  OR: [FormSubscriptionWhereInput!]
  NOT: [FormSubscriptionWhereInput!]
}

input FormUpdateManyDataInput {
  name: String
  url: String
}

input FormUpdateManyInput {
  create: [FormCreateInput!]
  deleteMany: [FormScalarWhereInput!]
  updateMany: [FormUpdateManyWithWhereNestedInput!]
}

input FormUpdateManyMutationInput {
  name: String
  url: String
}

input FormUpdateManyWithWhereNestedInput {
  where: FormScalarWhereInput!
  data: FormUpdateManyDataInput!
}

input FormWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [FormWhereInput!]
  OR: [FormWhereInput!]
  NOT: [FormWhereInput!]
}

type GameIndex {
  name: String
  url: String
}

type GameIndexConnection {
  pageInfo: PageInfo!
  edges: [GameIndexEdge]!
  aggregate: AggregateGameIndex!
}

input GameIndexCreateInput {
  name: String
  url: String
}

input GameIndexCreateManyInput {
  create: [GameIndexCreateInput!]
}

type GameIndexEdge {
  node: GameIndex!
  cursor: String!
}

enum GameIndexOrderByInput {
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GameIndexPreviousValues {
  name: String
  url: String
}

input GameIndexScalarWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [GameIndexScalarWhereInput!]
  OR: [GameIndexScalarWhereInput!]
  NOT: [GameIndexScalarWhereInput!]
}

type GameIndexSubscriptionPayload {
  mutation: MutationType!
  node: GameIndex
  updatedFields: [String!]
  previousValues: GameIndexPreviousValues
}

input GameIndexSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GameIndexWhereInput
  AND: [GameIndexSubscriptionWhereInput!]
  OR: [GameIndexSubscriptionWhereInput!]
  NOT: [GameIndexSubscriptionWhereInput!]
}

input GameIndexUpdateManyDataInput {
  name: String
  url: String
}

input GameIndexUpdateManyInput {
  create: [GameIndexCreateInput!]
  deleteMany: [GameIndexScalarWhereInput!]
  updateMany: [GameIndexUpdateManyWithWhereNestedInput!]
}

input GameIndexUpdateManyMutationInput {
  name: String
  url: String
}

input GameIndexUpdateManyWithWhereNestedInput {
  where: GameIndexScalarWhereInput!
  data: GameIndexUpdateManyDataInput!
}

input GameIndexWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [GameIndexWhereInput!]
  OR: [GameIndexWhereInput!]
  NOT: [GameIndexWhereInput!]
}

type Item {
  name: String
  url: String
}

type ItemConnection {
  pageInfo: PageInfo!
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  name: String
  url: String
}

input ItemCreateManyInput {
  create: [ItemCreateInput!]
}

type ItemEdge {
  node: Item!
  cursor: String!
}

enum ItemOrderByInput {
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ItemPreviousValues {
  name: String
  url: String
}

input ItemScalarWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [ItemScalarWhereInput!]
  OR: [ItemScalarWhereInput!]
  NOT: [ItemScalarWhereInput!]
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
  AND: [ItemSubscriptionWhereInput!]
  OR: [ItemSubscriptionWhereInput!]
  NOT: [ItemSubscriptionWhereInput!]
}

input ItemUpdateManyDataInput {
  name: String
  url: String
}

input ItemUpdateManyInput {
  create: [ItemCreateInput!]
  deleteMany: [ItemScalarWhereInput!]
  updateMany: [ItemUpdateManyWithWhereNestedInput!]
}

input ItemUpdateManyMutationInput {
  name: String
  url: String
}

input ItemUpdateManyWithWhereNestedInput {
  where: ItemScalarWhereInput!
  data: ItemUpdateManyDataInput!
}

input ItemWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [ItemWhereInput!]
  OR: [ItemWhereInput!]
  NOT: [ItemWhereInput!]
}

scalar Long

type Move {
  name: String
  url: String
}

type MoveConnection {
  pageInfo: PageInfo!
  edges: [MoveEdge]!
  aggregate: AggregateMove!
}

input MoveCreateInput {
  name: String
  url: String
}

input MoveCreateManyInput {
  create: [MoveCreateInput!]
}

type MoveEdge {
  node: Move!
  cursor: String!
}

enum MoveOrderByInput {
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MovePreviousValues {
  name: String
  url: String
}

input MoveScalarWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [MoveScalarWhereInput!]
  OR: [MoveScalarWhereInput!]
  NOT: [MoveScalarWhereInput!]
}

type MoveSubscriptionPayload {
  mutation: MutationType!
  node: Move
  updatedFields: [String!]
  previousValues: MovePreviousValues
}

input MoveSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MoveWhereInput
  AND: [MoveSubscriptionWhereInput!]
  OR: [MoveSubscriptionWhereInput!]
  NOT: [MoveSubscriptionWhereInput!]
}

input MoveUpdateManyDataInput {
  name: String
  url: String
}

input MoveUpdateManyInput {
  create: [MoveCreateInput!]
  deleteMany: [MoveScalarWhereInput!]
  updateMany: [MoveUpdateManyWithWhereNestedInput!]
}

input MoveUpdateManyMutationInput {
  name: String
  url: String
}

input MoveUpdateManyWithWhereNestedInput {
  where: MoveScalarWhereInput!
  data: MoveUpdateManyDataInput!
}

input MoveWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [MoveWhereInput!]
  OR: [MoveWhereInput!]
  NOT: [MoveWhereInput!]
}

type Mutation {
  createAbility(data: AbilityCreateInput!): Ability!
  updateManyAbilities(data: AbilityUpdateManyMutationInput!, where: AbilityWhereInput): BatchPayload!
  deleteManyAbilities(where: AbilityWhereInput): BatchPayload!
  createForm(data: FormCreateInput!): Form!
  updateManyForms(data: FormUpdateManyMutationInput!, where: FormWhereInput): BatchPayload!
  deleteManyForms(where: FormWhereInput): BatchPayload!
  createGameIndex(data: GameIndexCreateInput!): GameIndex!
  updateManyGameIndexes(data: GameIndexUpdateManyMutationInput!, where: GameIndexWhereInput): BatchPayload!
  deleteManyGameIndexes(where: GameIndexWhereInput): BatchPayload!
  createItem(data: ItemCreateInput!): Item!
  updateManyItems(data: ItemUpdateManyMutationInput!, where: ItemWhereInput): BatchPayload!
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  createMove(data: MoveCreateInput!): Move!
  updateManyMoves(data: MoveUpdateManyMutationInput!, where: MoveWhereInput): BatchPayload!
  deleteManyMoves(where: MoveWhereInput): BatchPayload!
  createPokemon(data: PokemonCreateInput!): Pokemon!
  updatePokemon(data: PokemonUpdateInput!, where: PokemonWhereUniqueInput!): Pokemon
  updateManyPokemons(data: PokemonUpdateManyMutationInput!, where: PokemonWhereInput): BatchPayload!
  upsertPokemon(where: PokemonWhereUniqueInput!, create: PokemonCreateInput!, update: PokemonUpdateInput!): Pokemon!
  deletePokemon(where: PokemonWhereUniqueInput!): Pokemon
  deleteManyPokemons(where: PokemonWhereInput): BatchPayload!
  createSpecies(data: SpeciesCreateInput!): Species!
  updateManySpecieses(data: SpeciesUpdateManyMutationInput!, where: SpeciesWhereInput): BatchPayload!
  deleteManySpecieses(where: SpeciesWhereInput): BatchPayload!
  createSprite(data: SpriteCreateInput!): Sprite!
  updateManySprites(data: SpriteUpdateManyMutationInput!, where: SpriteWhereInput): BatchPayload!
  deleteManySprites(where: SpriteWhereInput): BatchPayload!
  createStat(data: StatCreateInput!): Stat!
  updateManyStats(data: StatUpdateManyMutationInput!, where: StatWhereInput): BatchPayload!
  deleteManyStats(where: StatWhereInput): BatchPayload!
  createType(data: TypeCreateInput!): Type!
  updateManyTypes(data: TypeUpdateManyMutationInput!, where: TypeWhereInput): BatchPayload!
  deleteManyTypes(where: TypeWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Pokemon {
  abilities(where: AbilityWhereInput, orderBy: AbilityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ability!]
  base_experience: Int
  forms(where: FormWhereInput, orderBy: FormOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Form!]
  game_indices(where: GameIndexWhereInput, orderBy: GameIndexOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GameIndex!]
  held_items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item!]
  height: Int
  id: ID!
  is_default: Boolean
  location_area_encounters: String
  moves(where: MoveWhereInput, orderBy: MoveOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Move!]
  name: String
  order: Int
  species(where: SpeciesWhereInput, orderBy: SpeciesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Species!]
  sprites(where: SpriteWhereInput, orderBy: SpriteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sprite!]
  stats(where: StatWhereInput, orderBy: StatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stat!]
  types(where: TypeWhereInput, orderBy: TypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Type!]
  weight: Int
}

type PokemonConnection {
  pageInfo: PageInfo!
  edges: [PokemonEdge]!
  aggregate: AggregatePokemon!
}

input PokemonCreateInput {
  abilities: AbilityCreateManyInput
  base_experience: Int
  forms: FormCreateManyInput
  game_indices: GameIndexCreateManyInput
  held_items: ItemCreateManyInput
  height: Int
  is_default: Boolean
  location_area_encounters: String
  moves: MoveCreateManyInput
  name: String
  order: Int
  species: SpeciesCreateManyInput
  sprites: SpriteCreateManyInput
  stats: StatCreateManyInput
  types: TypeCreateManyInput
  weight: Int
}

type PokemonEdge {
  node: Pokemon!
  cursor: String!
}

enum PokemonOrderByInput {
  base_experience_ASC
  base_experience_DESC
  height_ASC
  height_DESC
  id_ASC
  id_DESC
  is_default_ASC
  is_default_DESC
  location_area_encounters_ASC
  location_area_encounters_DESC
  name_ASC
  name_DESC
  order_ASC
  order_DESC
  weight_ASC
  weight_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PokemonPreviousValues {
  base_experience: Int
  height: Int
  id: ID!
  is_default: Boolean
  location_area_encounters: String
  name: String
  order: Int
  weight: Int
}

type PokemonSubscriptionPayload {
  mutation: MutationType!
  node: Pokemon
  updatedFields: [String!]
  previousValues: PokemonPreviousValues
}

input PokemonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PokemonWhereInput
  AND: [PokemonSubscriptionWhereInput!]
  OR: [PokemonSubscriptionWhereInput!]
  NOT: [PokemonSubscriptionWhereInput!]
}

input PokemonUpdateInput {
  abilities: AbilityUpdateManyInput
  base_experience: Int
  forms: FormUpdateManyInput
  game_indices: GameIndexUpdateManyInput
  held_items: ItemUpdateManyInput
  height: Int
  is_default: Boolean
  location_area_encounters: String
  moves: MoveUpdateManyInput
  name: String
  order: Int
  species: SpeciesUpdateManyInput
  sprites: SpriteUpdateManyInput
  stats: StatUpdateManyInput
  types: TypeUpdateManyInput
  weight: Int
}

input PokemonUpdateManyMutationInput {
  base_experience: Int
  height: Int
  is_default: Boolean
  location_area_encounters: String
  name: String
  order: Int
  weight: Int
}

input PokemonWhereInput {
  abilities_every: AbilityWhereInput
  abilities_some: AbilityWhereInput
  abilities_none: AbilityWhereInput
  base_experience: Int
  base_experience_not: Int
  base_experience_in: [Int!]
  base_experience_not_in: [Int!]
  base_experience_lt: Int
  base_experience_lte: Int
  base_experience_gt: Int
  base_experience_gte: Int
  forms_every: FormWhereInput
  forms_some: FormWhereInput
  forms_none: FormWhereInput
  game_indices_every: GameIndexWhereInput
  game_indices_some: GameIndexWhereInput
  game_indices_none: GameIndexWhereInput
  held_items_every: ItemWhereInput
  held_items_some: ItemWhereInput
  held_items_none: ItemWhereInput
  height: Int
  height_not: Int
  height_in: [Int!]
  height_not_in: [Int!]
  height_lt: Int
  height_lte: Int
  height_gt: Int
  height_gte: Int
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  is_default: Boolean
  is_default_not: Boolean
  location_area_encounters: String
  location_area_encounters_not: String
  location_area_encounters_in: [String!]
  location_area_encounters_not_in: [String!]
  location_area_encounters_lt: String
  location_area_encounters_lte: String
  location_area_encounters_gt: String
  location_area_encounters_gte: String
  location_area_encounters_contains: String
  location_area_encounters_not_contains: String
  location_area_encounters_starts_with: String
  location_area_encounters_not_starts_with: String
  location_area_encounters_ends_with: String
  location_area_encounters_not_ends_with: String
  moves_every: MoveWhereInput
  moves_some: MoveWhereInput
  moves_none: MoveWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  order: Int
  order_not: Int
  order_in: [Int!]
  order_not_in: [Int!]
  order_lt: Int
  order_lte: Int
  order_gt: Int
  order_gte: Int
  species_every: SpeciesWhereInput
  species_some: SpeciesWhereInput
  species_none: SpeciesWhereInput
  sprites_every: SpriteWhereInput
  sprites_some: SpriteWhereInput
  sprites_none: SpriteWhereInput
  stats_every: StatWhereInput
  stats_some: StatWhereInput
  stats_none: StatWhereInput
  types_every: TypeWhereInput
  types_some: TypeWhereInput
  types_none: TypeWhereInput
  weight: Int
  weight_not: Int
  weight_in: [Int!]
  weight_not_in: [Int!]
  weight_lt: Int
  weight_lte: Int
  weight_gt: Int
  weight_gte: Int
  AND: [PokemonWhereInput!]
  OR: [PokemonWhereInput!]
  NOT: [PokemonWhereInput!]
}

input PokemonWhereUniqueInput {
  id: ID
}

type Query {
  abilities(where: AbilityWhereInput, orderBy: AbilityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Ability]!
  abilitiesConnection(where: AbilityWhereInput, orderBy: AbilityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AbilityConnection!
  forms(where: FormWhereInput, orderBy: FormOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Form]!
  formsConnection(where: FormWhereInput, orderBy: FormOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FormConnection!
  gameIndexes(where: GameIndexWhereInput, orderBy: GameIndexOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GameIndex]!
  gameIndexesConnection(where: GameIndexWhereInput, orderBy: GameIndexOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameIndexConnection!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  moves(where: MoveWhereInput, orderBy: MoveOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Move]!
  movesConnection(where: MoveWhereInput, orderBy: MoveOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MoveConnection!
  pokemon(where: PokemonWhereUniqueInput!): Pokemon
  pokemons(where: PokemonWhereInput, orderBy: PokemonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pokemon]!
  pokemonsConnection(where: PokemonWhereInput, orderBy: PokemonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PokemonConnection!
  specieses(where: SpeciesWhereInput, orderBy: SpeciesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Species]!
  speciesesConnection(where: SpeciesWhereInput, orderBy: SpeciesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SpeciesConnection!
  sprites(where: SpriteWhereInput, orderBy: SpriteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Sprite]!
  spritesConnection(where: SpriteWhereInput, orderBy: SpriteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SpriteConnection!
  stats(where: StatWhereInput, orderBy: StatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stat]!
  statsConnection(where: StatWhereInput, orderBy: StatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StatConnection!
  types(where: TypeWhereInput, orderBy: TypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Type]!
  typesConnection(where: TypeWhereInput, orderBy: TypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TypeConnection!
  node(id: ID!): Node
}

type Species {
  name: String
  url: String
}

type SpeciesConnection {
  pageInfo: PageInfo!
  edges: [SpeciesEdge]!
  aggregate: AggregateSpecies!
}

input SpeciesCreateInput {
  name: String
  url: String
}

input SpeciesCreateManyInput {
  create: [SpeciesCreateInput!]
}

type SpeciesEdge {
  node: Species!
  cursor: String!
}

enum SpeciesOrderByInput {
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SpeciesPreviousValues {
  name: String
  url: String
}

input SpeciesScalarWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [SpeciesScalarWhereInput!]
  OR: [SpeciesScalarWhereInput!]
  NOT: [SpeciesScalarWhereInput!]
}

type SpeciesSubscriptionPayload {
  mutation: MutationType!
  node: Species
  updatedFields: [String!]
  previousValues: SpeciesPreviousValues
}

input SpeciesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SpeciesWhereInput
  AND: [SpeciesSubscriptionWhereInput!]
  OR: [SpeciesSubscriptionWhereInput!]
  NOT: [SpeciesSubscriptionWhereInput!]
}

input SpeciesUpdateManyDataInput {
  name: String
  url: String
}

input SpeciesUpdateManyInput {
  create: [SpeciesCreateInput!]
  deleteMany: [SpeciesScalarWhereInput!]
  updateMany: [SpeciesUpdateManyWithWhereNestedInput!]
}

input SpeciesUpdateManyMutationInput {
  name: String
  url: String
}

input SpeciesUpdateManyWithWhereNestedInput {
  where: SpeciesScalarWhereInput!
  data: SpeciesUpdateManyDataInput!
}

input SpeciesWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [SpeciesWhereInput!]
  OR: [SpeciesWhereInput!]
  NOT: [SpeciesWhereInput!]
}

type Sprite {
  back_default: String
  back_female: String
  back_shiny: String
  back_shiny_female: String
  front_default: String
  front_female: String
  front_shiny: String
  front_shiny_female: String
}

type SpriteConnection {
  pageInfo: PageInfo!
  edges: [SpriteEdge]!
  aggregate: AggregateSprite!
}

input SpriteCreateInput {
  back_default: String
  back_female: String
  back_shiny: String
  back_shiny_female: String
  front_default: String
  front_female: String
  front_shiny: String
  front_shiny_female: String
}

input SpriteCreateManyInput {
  create: [SpriteCreateInput!]
}

type SpriteEdge {
  node: Sprite!
  cursor: String!
}

enum SpriteOrderByInput {
  back_default_ASC
  back_default_DESC
  back_female_ASC
  back_female_DESC
  back_shiny_ASC
  back_shiny_DESC
  back_shiny_female_ASC
  back_shiny_female_DESC
  front_default_ASC
  front_default_DESC
  front_female_ASC
  front_female_DESC
  front_shiny_ASC
  front_shiny_DESC
  front_shiny_female_ASC
  front_shiny_female_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SpritePreviousValues {
  back_default: String
  back_female: String
  back_shiny: String
  back_shiny_female: String
  front_default: String
  front_female: String
  front_shiny: String
  front_shiny_female: String
}

input SpriteScalarWhereInput {
  back_default: String
  back_default_not: String
  back_default_in: [String!]
  back_default_not_in: [String!]
  back_default_lt: String
  back_default_lte: String
  back_default_gt: String
  back_default_gte: String
  back_default_contains: String
  back_default_not_contains: String
  back_default_starts_with: String
  back_default_not_starts_with: String
  back_default_ends_with: String
  back_default_not_ends_with: String
  back_female: String
  back_female_not: String
  back_female_in: [String!]
  back_female_not_in: [String!]
  back_female_lt: String
  back_female_lte: String
  back_female_gt: String
  back_female_gte: String
  back_female_contains: String
  back_female_not_contains: String
  back_female_starts_with: String
  back_female_not_starts_with: String
  back_female_ends_with: String
  back_female_not_ends_with: String
  back_shiny: String
  back_shiny_not: String
  back_shiny_in: [String!]
  back_shiny_not_in: [String!]
  back_shiny_lt: String
  back_shiny_lte: String
  back_shiny_gt: String
  back_shiny_gte: String
  back_shiny_contains: String
  back_shiny_not_contains: String
  back_shiny_starts_with: String
  back_shiny_not_starts_with: String
  back_shiny_ends_with: String
  back_shiny_not_ends_with: String
  back_shiny_female: String
  back_shiny_female_not: String
  back_shiny_female_in: [String!]
  back_shiny_female_not_in: [String!]
  back_shiny_female_lt: String
  back_shiny_female_lte: String
  back_shiny_female_gt: String
  back_shiny_female_gte: String
  back_shiny_female_contains: String
  back_shiny_female_not_contains: String
  back_shiny_female_starts_with: String
  back_shiny_female_not_starts_with: String
  back_shiny_female_ends_with: String
  back_shiny_female_not_ends_with: String
  front_default: String
  front_default_not: String
  front_default_in: [String!]
  front_default_not_in: [String!]
  front_default_lt: String
  front_default_lte: String
  front_default_gt: String
  front_default_gte: String
  front_default_contains: String
  front_default_not_contains: String
  front_default_starts_with: String
  front_default_not_starts_with: String
  front_default_ends_with: String
  front_default_not_ends_with: String
  front_female: String
  front_female_not: String
  front_female_in: [String!]
  front_female_not_in: [String!]
  front_female_lt: String
  front_female_lte: String
  front_female_gt: String
  front_female_gte: String
  front_female_contains: String
  front_female_not_contains: String
  front_female_starts_with: String
  front_female_not_starts_with: String
  front_female_ends_with: String
  front_female_not_ends_with: String
  front_shiny: String
  front_shiny_not: String
  front_shiny_in: [String!]
  front_shiny_not_in: [String!]
  front_shiny_lt: String
  front_shiny_lte: String
  front_shiny_gt: String
  front_shiny_gte: String
  front_shiny_contains: String
  front_shiny_not_contains: String
  front_shiny_starts_with: String
  front_shiny_not_starts_with: String
  front_shiny_ends_with: String
  front_shiny_not_ends_with: String
  front_shiny_female: String
  front_shiny_female_not: String
  front_shiny_female_in: [String!]
  front_shiny_female_not_in: [String!]
  front_shiny_female_lt: String
  front_shiny_female_lte: String
  front_shiny_female_gt: String
  front_shiny_female_gte: String
  front_shiny_female_contains: String
  front_shiny_female_not_contains: String
  front_shiny_female_starts_with: String
  front_shiny_female_not_starts_with: String
  front_shiny_female_ends_with: String
  front_shiny_female_not_ends_with: String
  AND: [SpriteScalarWhereInput!]
  OR: [SpriteScalarWhereInput!]
  NOT: [SpriteScalarWhereInput!]
}

type SpriteSubscriptionPayload {
  mutation: MutationType!
  node: Sprite
  updatedFields: [String!]
  previousValues: SpritePreviousValues
}

input SpriteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SpriteWhereInput
  AND: [SpriteSubscriptionWhereInput!]
  OR: [SpriteSubscriptionWhereInput!]
  NOT: [SpriteSubscriptionWhereInput!]
}

input SpriteUpdateManyDataInput {
  back_default: String
  back_female: String
  back_shiny: String
  back_shiny_female: String
  front_default: String
  front_female: String
  front_shiny: String
  front_shiny_female: String
}

input SpriteUpdateManyInput {
  create: [SpriteCreateInput!]
  deleteMany: [SpriteScalarWhereInput!]
  updateMany: [SpriteUpdateManyWithWhereNestedInput!]
}

input SpriteUpdateManyMutationInput {
  back_default: String
  back_female: String
  back_shiny: String
  back_shiny_female: String
  front_default: String
  front_female: String
  front_shiny: String
  front_shiny_female: String
}

input SpriteUpdateManyWithWhereNestedInput {
  where: SpriteScalarWhereInput!
  data: SpriteUpdateManyDataInput!
}

input SpriteWhereInput {
  back_default: String
  back_default_not: String
  back_default_in: [String!]
  back_default_not_in: [String!]
  back_default_lt: String
  back_default_lte: String
  back_default_gt: String
  back_default_gte: String
  back_default_contains: String
  back_default_not_contains: String
  back_default_starts_with: String
  back_default_not_starts_with: String
  back_default_ends_with: String
  back_default_not_ends_with: String
  back_female: String
  back_female_not: String
  back_female_in: [String!]
  back_female_not_in: [String!]
  back_female_lt: String
  back_female_lte: String
  back_female_gt: String
  back_female_gte: String
  back_female_contains: String
  back_female_not_contains: String
  back_female_starts_with: String
  back_female_not_starts_with: String
  back_female_ends_with: String
  back_female_not_ends_with: String
  back_shiny: String
  back_shiny_not: String
  back_shiny_in: [String!]
  back_shiny_not_in: [String!]
  back_shiny_lt: String
  back_shiny_lte: String
  back_shiny_gt: String
  back_shiny_gte: String
  back_shiny_contains: String
  back_shiny_not_contains: String
  back_shiny_starts_with: String
  back_shiny_not_starts_with: String
  back_shiny_ends_with: String
  back_shiny_not_ends_with: String
  back_shiny_female: String
  back_shiny_female_not: String
  back_shiny_female_in: [String!]
  back_shiny_female_not_in: [String!]
  back_shiny_female_lt: String
  back_shiny_female_lte: String
  back_shiny_female_gt: String
  back_shiny_female_gte: String
  back_shiny_female_contains: String
  back_shiny_female_not_contains: String
  back_shiny_female_starts_with: String
  back_shiny_female_not_starts_with: String
  back_shiny_female_ends_with: String
  back_shiny_female_not_ends_with: String
  front_default: String
  front_default_not: String
  front_default_in: [String!]
  front_default_not_in: [String!]
  front_default_lt: String
  front_default_lte: String
  front_default_gt: String
  front_default_gte: String
  front_default_contains: String
  front_default_not_contains: String
  front_default_starts_with: String
  front_default_not_starts_with: String
  front_default_ends_with: String
  front_default_not_ends_with: String
  front_female: String
  front_female_not: String
  front_female_in: [String!]
  front_female_not_in: [String!]
  front_female_lt: String
  front_female_lte: String
  front_female_gt: String
  front_female_gte: String
  front_female_contains: String
  front_female_not_contains: String
  front_female_starts_with: String
  front_female_not_starts_with: String
  front_female_ends_with: String
  front_female_not_ends_with: String
  front_shiny: String
  front_shiny_not: String
  front_shiny_in: [String!]
  front_shiny_not_in: [String!]
  front_shiny_lt: String
  front_shiny_lte: String
  front_shiny_gt: String
  front_shiny_gte: String
  front_shiny_contains: String
  front_shiny_not_contains: String
  front_shiny_starts_with: String
  front_shiny_not_starts_with: String
  front_shiny_ends_with: String
  front_shiny_not_ends_with: String
  front_shiny_female: String
  front_shiny_female_not: String
  front_shiny_female_in: [String!]
  front_shiny_female_not_in: [String!]
  front_shiny_female_lt: String
  front_shiny_female_lte: String
  front_shiny_female_gt: String
  front_shiny_female_gte: String
  front_shiny_female_contains: String
  front_shiny_female_not_contains: String
  front_shiny_female_starts_with: String
  front_shiny_female_not_starts_with: String
  front_shiny_female_ends_with: String
  front_shiny_female_not_ends_with: String
  AND: [SpriteWhereInput!]
  OR: [SpriteWhereInput!]
  NOT: [SpriteWhereInput!]
}

type Stat {
  base_stat: Int
  effort: Int
  name: String
  url: String
}

type StatConnection {
  pageInfo: PageInfo!
  edges: [StatEdge]!
  aggregate: AggregateStat!
}

input StatCreateInput {
  base_stat: Int
  effort: Int
  name: String
  url: String
}

input StatCreateManyInput {
  create: [StatCreateInput!]
}

type StatEdge {
  node: Stat!
  cursor: String!
}

enum StatOrderByInput {
  base_stat_ASC
  base_stat_DESC
  effort_ASC
  effort_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StatPreviousValues {
  base_stat: Int
  effort: Int
  name: String
  url: String
}

input StatScalarWhereInput {
  base_stat: Int
  base_stat_not: Int
  base_stat_in: [Int!]
  base_stat_not_in: [Int!]
  base_stat_lt: Int
  base_stat_lte: Int
  base_stat_gt: Int
  base_stat_gte: Int
  effort: Int
  effort_not: Int
  effort_in: [Int!]
  effort_not_in: [Int!]
  effort_lt: Int
  effort_lte: Int
  effort_gt: Int
  effort_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [StatScalarWhereInput!]
  OR: [StatScalarWhereInput!]
  NOT: [StatScalarWhereInput!]
}

type StatSubscriptionPayload {
  mutation: MutationType!
  node: Stat
  updatedFields: [String!]
  previousValues: StatPreviousValues
}

input StatSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StatWhereInput
  AND: [StatSubscriptionWhereInput!]
  OR: [StatSubscriptionWhereInput!]
  NOT: [StatSubscriptionWhereInput!]
}

input StatUpdateManyDataInput {
  base_stat: Int
  effort: Int
  name: String
  url: String
}

input StatUpdateManyInput {
  create: [StatCreateInput!]
  deleteMany: [StatScalarWhereInput!]
  updateMany: [StatUpdateManyWithWhereNestedInput!]
}

input StatUpdateManyMutationInput {
  base_stat: Int
  effort: Int
  name: String
  url: String
}

input StatUpdateManyWithWhereNestedInput {
  where: StatScalarWhereInput!
  data: StatUpdateManyDataInput!
}

input StatWhereInput {
  base_stat: Int
  base_stat_not: Int
  base_stat_in: [Int!]
  base_stat_not_in: [Int!]
  base_stat_lt: Int
  base_stat_lte: Int
  base_stat_gt: Int
  base_stat_gte: Int
  effort: Int
  effort_not: Int
  effort_in: [Int!]
  effort_not_in: [Int!]
  effort_lt: Int
  effort_lte: Int
  effort_gt: Int
  effort_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [StatWhereInput!]
  OR: [StatWhereInput!]
  NOT: [StatWhereInput!]
}

type Subscription {
  ability(where: AbilitySubscriptionWhereInput): AbilitySubscriptionPayload
  form(where: FormSubscriptionWhereInput): FormSubscriptionPayload
  gameIndex(where: GameIndexSubscriptionWhereInput): GameIndexSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  move(where: MoveSubscriptionWhereInput): MoveSubscriptionPayload
  pokemon(where: PokemonSubscriptionWhereInput): PokemonSubscriptionPayload
  species(where: SpeciesSubscriptionWhereInput): SpeciesSubscriptionPayload
  sprite(where: SpriteSubscriptionWhereInput): SpriteSubscriptionPayload
  stat(where: StatSubscriptionWhereInput): StatSubscriptionPayload
  type(where: TypeSubscriptionWhereInput): TypeSubscriptionPayload
}

type Type {
  slot: Int
  name: String
  url: String
}

type TypeConnection {
  pageInfo: PageInfo!
  edges: [TypeEdge]!
  aggregate: AggregateType!
}

input TypeCreateInput {
  slot: Int
  name: String
  url: String
}

input TypeCreateManyInput {
  create: [TypeCreateInput!]
}

type TypeEdge {
  node: Type!
  cursor: String!
}

enum TypeOrderByInput {
  slot_ASC
  slot_DESC
  name_ASC
  name_DESC
  url_ASC
  url_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TypePreviousValues {
  slot: Int
  name: String
  url: String
}

input TypeScalarWhereInput {
  slot: Int
  slot_not: Int
  slot_in: [Int!]
  slot_not_in: [Int!]
  slot_lt: Int
  slot_lte: Int
  slot_gt: Int
  slot_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [TypeScalarWhereInput!]
  OR: [TypeScalarWhereInput!]
  NOT: [TypeScalarWhereInput!]
}

type TypeSubscriptionPayload {
  mutation: MutationType!
  node: Type
  updatedFields: [String!]
  previousValues: TypePreviousValues
}

input TypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TypeWhereInput
  AND: [TypeSubscriptionWhereInput!]
  OR: [TypeSubscriptionWhereInput!]
  NOT: [TypeSubscriptionWhereInput!]
}

input TypeUpdateManyDataInput {
  slot: Int
  name: String
  url: String
}

input TypeUpdateManyInput {
  create: [TypeCreateInput!]
  deleteMany: [TypeScalarWhereInput!]
  updateMany: [TypeUpdateManyWithWhereNestedInput!]
}

input TypeUpdateManyMutationInput {
  slot: Int
  name: String
  url: String
}

input TypeUpdateManyWithWhereNestedInput {
  where: TypeScalarWhereInput!
  data: TypeUpdateManyDataInput!
}

input TypeWhereInput {
  slot: Int
  slot_not: Int
  slot_in: [Int!]
  slot_not_in: [Int!]
  slot_lt: Int
  slot_lte: Int
  slot_gt: Int
  slot_gte: Int
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [TypeWhereInput!]
  OR: [TypeWhereInput!]
  NOT: [TypeWhereInput!]
}
`
      }
    