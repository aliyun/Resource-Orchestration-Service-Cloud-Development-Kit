"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeMetadata = void 0;
const fs = require("fs");
const path = require("path");
const ros_cdk_assembly_schema_1 = require("@alicloud/ros-cdk-assembly-schema");
const construct_compat_1 = require("../construct-compat");
const stack_1 = require("../stack");
const tree_1 = require("../tree");
const FILE_PATH = "tree.json";
/**
 * Construct that is automatically attached to the top-level `App`.
 * This generates, as part of synthesis, a file containing the construct tree and the metadata for each node in the tree.
 * The output is in a tree format so as to preserve the construct hierarchy.
 *
 * @experimental
 */
class TreeMetadata extends construct_compat_1.Construct {
    constructor(scope) {
        super(scope, "Tree");
    }
    synthesize(session) {
        const lookup = {};
        const visit = (construct) => {
            const children = construct.node.children.map((c) => {
                try {
                    return visit(c);
                }
                catch (e) {
                    this.node.addWarning(`Failed to render tree metadata for node [${c.node.id}]. Reason: ${e}`);
                    return undefined;
                }
            });
            const childrenMap = children
                .filter((child) => child !== undefined)
                .reduce((map, child) => Object.assign(map, { [child.id]: child }), {});
            const node = {
                id: construct.node.id || "App",
                path: construct.node.path,
                children: Object.keys(childrenMap).length === 0 ? undefined : childrenMap,
                attributes: this.synthAttributes(construct),
            };
            lookup[node.path] = node;
            return node;
        };
        const tree = {
            version: "tree-0.1",
            tree: visit(this.node.root),
        };
        const builder = session.assembly;
        fs.writeFileSync(path.join(builder.outdir, FILE_PATH), JSON.stringify(tree, undefined, 2), { encoding: "utf-8" });
        builder.addArtifact("Tree", {
            type: ros_cdk_assembly_schema_1.ArtifactType.CDK_TREE,
            properties: {
                file: FILE_PATH,
            },
        });
    }
    synthAttributes(construct) {
        // check if a construct implements IInspectable
        function canInspect(inspectable) {
            return inspectable.inspect !== undefined;
        }
        const inspector = new tree_1.TreeInspector();
        // get attributes from the inspector
        if (canInspect(construct)) {
            construct.inspect(inspector);
            return stack_1.Stack.of(construct).resolve(inspector.attributes);
        }
        return undefined;
    }
}
exports.TreeMetadata = TreeMetadata;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1tZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRyZWUtbWV0YWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUJBQXlCO0FBQ3pCLDZCQUE2QjtBQUM3QiwrRUFBaUU7QUFDakUsMERBQStFO0FBQy9FLG9DQUFpQztBQUNqQyxrQ0FBc0Q7QUFFdEQsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBRTlCOzs7Ozs7R0FNRztBQUNILE1BQWEsWUFBYSxTQUFRLDRCQUFTO0lBQ3pDLFlBQVksS0FBZ0I7UUFDMUIsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRVMsVUFBVSxDQUFDLE9BQTBCO1FBQzdDLE1BQU0sTUFBTSxHQUE2QixFQUFFLENBQUM7UUFFNUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxTQUFxQixFQUFRLEVBQUU7WUFDNUMsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELElBQUk7b0JBQ0YsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2pCO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUNsQiw0Q0FBNEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLGNBQWMsQ0FBQyxFQUFFLENBQ3ZFLENBQUM7b0JBQ0YsT0FBTyxTQUFTLENBQUM7aUJBQ2xCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLFdBQVcsR0FBRyxRQUFRO2lCQUN6QixNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUM7aUJBQ3RDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxLQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUUxRSxNQUFNLElBQUksR0FBUztnQkFDakIsRUFBRSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEtBQUs7Z0JBQzlCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUk7Z0JBQ3pCLFFBQVEsRUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVztnQkFDakUsVUFBVSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO2FBQzVDLENBQUM7WUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztZQUV6QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztRQUVGLE1BQU0sSUFBSSxHQUFHO1lBQ1gsT0FBTyxFQUFFLFVBQVU7WUFDbkIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUM1QixDQUFDO1FBRUYsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxFQUFFLENBQUMsYUFBYSxDQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUNsQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FDdEIsQ0FBQztRQUVGLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQzFCLElBQUksRUFBRSxzQ0FBWSxDQUFDLFFBQVE7WUFDM0IsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGVBQWUsQ0FDckIsU0FBcUI7UUFFckIsK0NBQStDO1FBQy9DLFNBQVMsVUFBVSxDQUFDLFdBQWdCO1lBQ2xDLE9BQU8sV0FBVyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUM7UUFDM0MsQ0FBQztRQUVELE1BQU0sU0FBUyxHQUFHLElBQUksb0JBQWEsRUFBRSxDQUFDO1FBRXRDLG9DQUFvQztRQUNwQyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN6QixTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sYUFBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztDQUNGO0FBekVELG9DQXlFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgQXJ0aWZhY3RUeXBlIH0gZnJvbSBcIkBhbGljbG91ZC9yb3MtY2RrLWFzc2VtYmx5LXNjaGVtYVwiO1xuaW1wb3J0IHsgQ29uc3RydWN0LCBJQ29uc3RydWN0LCBJU3ludGhlc2lzU2Vzc2lvbiB9IGZyb20gXCIuLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuLi9zdGFja1wiO1xuaW1wb3J0IHsgSUluc3BlY3RhYmxlLCBUcmVlSW5zcGVjdG9yIH0gZnJvbSBcIi4uL3RyZWVcIjtcblxuY29uc3QgRklMRV9QQVRIID0gXCJ0cmVlLmpzb25cIjtcblxuLyoqXG4gKiBDb25zdHJ1Y3QgdGhhdCBpcyBhdXRvbWF0aWNhbGx5IGF0dGFjaGVkIHRvIHRoZSB0b3AtbGV2ZWwgYEFwcGAuXG4gKiBUaGlzIGdlbmVyYXRlcywgYXMgcGFydCBvZiBzeW50aGVzaXMsIGEgZmlsZSBjb250YWluaW5nIHRoZSBjb25zdHJ1Y3QgdHJlZSBhbmQgdGhlIG1ldGFkYXRhIGZvciBlYWNoIG5vZGUgaW4gdGhlIHRyZWUuXG4gKiBUaGUgb3V0cHV0IGlzIGluIGEgdHJlZSBmb3JtYXQgc28gYXMgdG8gcHJlc2VydmUgdGhlIGNvbnN0cnVjdCBoaWVyYXJjaHkuXG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgY2xhc3MgVHJlZU1ldGFkYXRhIGV4dGVuZHMgQ29uc3RydWN0IHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCkge1xuICAgIHN1cGVyKHNjb3BlLCBcIlRyZWVcIik7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3ludGhlc2l6ZShzZXNzaW9uOiBJU3ludGhlc2lzU2Vzc2lvbikge1xuICAgIGNvbnN0IGxvb2t1cDogeyBbcGF0aDogc3RyaW5nXTogTm9kZSB9ID0ge307XG5cbiAgICBjb25zdCB2aXNpdCA9IChjb25zdHJ1Y3Q6IElDb25zdHJ1Y3QpOiBOb2RlID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gY29uc3RydWN0Lm5vZGUuY2hpbGRyZW4ubWFwKChjKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHZpc2l0KGMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdGhpcy5ub2RlLmFkZFdhcm5pbmcoXG4gICAgICAgICAgICBgRmFpbGVkIHRvIHJlbmRlciB0cmVlIG1ldGFkYXRhIGZvciBub2RlIFske2Mubm9kZS5pZH1dLiBSZWFzb246ICR7ZX1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNoaWxkcmVuTWFwID0gY2hpbGRyZW5cbiAgICAgICAgLmZpbHRlcigoY2hpbGQpID0+IGNoaWxkICE9PSB1bmRlZmluZWQpXG4gICAgICAgIC5yZWR1Y2UoKG1hcCwgY2hpbGQpID0+IE9iamVjdC5hc3NpZ24obWFwLCB7IFtjaGlsZCEuaWRdOiBjaGlsZCB9KSwge30pO1xuXG4gICAgICBjb25zdCBub2RlOiBOb2RlID0ge1xuICAgICAgICBpZDogY29uc3RydWN0Lm5vZGUuaWQgfHwgXCJBcHBcIixcbiAgICAgICAgcGF0aDogY29uc3RydWN0Lm5vZGUucGF0aCxcbiAgICAgICAgY2hpbGRyZW46XG4gICAgICAgICAgT2JqZWN0LmtleXMoY2hpbGRyZW5NYXApLmxlbmd0aCA9PT0gMCA/IHVuZGVmaW5lZCA6IGNoaWxkcmVuTWFwLFxuICAgICAgICBhdHRyaWJ1dGVzOiB0aGlzLnN5bnRoQXR0cmlidXRlcyhjb25zdHJ1Y3QpLFxuICAgICAgfTtcblxuICAgICAgbG9va3VwW25vZGUucGF0aF0gPSBub2RlO1xuXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuXG4gICAgY29uc3QgdHJlZSA9IHtcbiAgICAgIHZlcnNpb246IFwidHJlZS0wLjFcIixcbiAgICAgIHRyZWU6IHZpc2l0KHRoaXMubm9kZS5yb290KSxcbiAgICB9O1xuXG4gICAgY29uc3QgYnVpbGRlciA9IHNlc3Npb24uYXNzZW1ibHk7XG4gICAgZnMud3JpdGVGaWxlU3luYyhcbiAgICAgIHBhdGguam9pbihidWlsZGVyLm91dGRpciwgRklMRV9QQVRIKSxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHRyZWUsIHVuZGVmaW5lZCwgMiksXG4gICAgICB7IGVuY29kaW5nOiBcInV0Zi04XCIgfVxuICAgICk7XG5cbiAgICBidWlsZGVyLmFkZEFydGlmYWN0KFwiVHJlZVwiLCB7XG4gICAgICB0eXBlOiBBcnRpZmFjdFR5cGUuQ0RLX1RSRUUsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGZpbGU6IEZJTEVfUEFUSCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN5bnRoQXR0cmlidXRlcyhcbiAgICBjb25zdHJ1Y3Q6IElDb25zdHJ1Y3RcbiAgKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IHVuZGVmaW5lZCB7XG4gICAgLy8gY2hlY2sgaWYgYSBjb25zdHJ1Y3QgaW1wbGVtZW50cyBJSW5zcGVjdGFibGVcbiAgICBmdW5jdGlvbiBjYW5JbnNwZWN0KGluc3BlY3RhYmxlOiBhbnkpOiBpbnNwZWN0YWJsZSBpcyBJSW5zcGVjdGFibGUge1xuICAgICAgcmV0dXJuIGluc3BlY3RhYmxlLmluc3BlY3QgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBpbnNwZWN0b3IgPSBuZXcgVHJlZUluc3BlY3RvcigpO1xuXG4gICAgLy8gZ2V0IGF0dHJpYnV0ZXMgZnJvbSB0aGUgaW5zcGVjdG9yXG4gICAgaWYgKGNhbkluc3BlY3QoY29uc3RydWN0KSkge1xuICAgICAgY29uc3RydWN0Lmluc3BlY3QoaW5zcGVjdG9yKTtcbiAgICAgIHJldHVybiBTdGFjay5vZihjb25zdHJ1Y3QpLnJlc29sdmUoaW5zcGVjdG9yLmF0dHJpYnV0ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbmludGVyZmFjZSBOb2RlIHtcbiAgaWQ6IHN0cmluZztcbiAgcGF0aDogc3RyaW5nO1xuICBjaGlsZHJlbj86IHsgW2tleTogc3RyaW5nXTogTm9kZSB9O1xuICBhdHRyaWJ1dGVzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cbiJdfQ==