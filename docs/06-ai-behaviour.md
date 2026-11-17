# AI behaviour rules

These rules apply to anything that calls a model.

- Validate model output against a schema before it reaches other systems or
  users.
- Do hard constraints in code.  Let the model rank, summarise or explain.
- Say so when the AI is unsure.  Do not sound confident on thin data.
- Put model calls behind an interface.  Keep model IDs and settings in
  config, never hard-coded.
- Before changing models, run a fixed evaluation set (realistic inputs with
  correct answers).  Score schema validity, missed items and false
  positives.
- If access to a model is pending in a region, build and test with a
  stand-in model, then re-run the evaluation set once access arrives.
