# spec-to-ts

Generates TypeScript classes for all ALIYUN resource and property types.

Usage:

```shell
$ spec2ts <typescript-output-path> <scope>
```

The json spec is built-in another package within @alicloud and can be updated by using command "spec2ts --spec".

The command will read the Spec and create .ts files that contains types for all resources and property types(naming scope.generated.ts). Then resource class will also be generated for every resource(naming resource-name.ts).

After the generation has been finished, the resources code in src folder will be replaced automatically.
