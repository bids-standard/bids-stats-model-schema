
# New stats model library that generates json schema via pydantic:
https://github.com/bids-standard/stats-models

# Deprecated
## ~~bids-stats-model-schema~~

Work in progress to make a JSON schema to validate BIDS statistical models.

- schema.json - The schema itself, to be used with tool like AJV for validation.
- model-narps_smdl.json - A copy of a work in progress example statistical model to test schema against. More of these will be apearing in the [model zoo](https://github.com/bids-standard/model-zoo/)
- pybids_xform_schema.json - Transformations were moved out the main stats model specification, while updating the schema the old json for validating these transformation was put in its own file until for the time being.
- schemasite - Directory that contains a react app for a site that can validate models.
