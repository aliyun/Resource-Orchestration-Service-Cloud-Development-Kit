using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms.Datasource
{
    /// <summary>Represents a `Policies`.</summary>
    [JsiiInterface(nativeType: typeof(IPolicies), fullyQualifiedName: "@alicloud/ros-cdk-kms.datasource.IPolicies")]
    public interface IPolicies : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Policies: The list of policies.</summary>
        [JsiiProperty(name: "attrPolicies", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolicies
        {
            get;
        }

        /// <summary>Attribute PolicyNames: The list of policy names.</summary>
        [JsiiProperty(name: "attrPolicyNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPolicyNames
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-kms.datasource.PoliciesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.IPoliciesProps Props
        {
            get;
        }

        /// <summary>Represents a `Policies`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPolicies), fullyQualifiedName: "@alicloud/ros-cdk-kms.datasource.IPolicies")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.IPolicies
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Policies: The list of policies.</summary>
            [JsiiProperty(name: "attrPolicies", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolicies
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PolicyNames: The list of policy names.</summary>
            [JsiiProperty(name: "attrPolicyNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPolicyNames
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-kms.datasource.PoliciesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.IPoliciesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.IPoliciesProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
