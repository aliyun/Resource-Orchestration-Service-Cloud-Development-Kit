using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>Represents a `TLSPolicies`.</summary>
    [JsiiInterface(nativeType: typeof(ITLSPolicies), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.ITLSPolicies")]
    public interface ITLSPolicies : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute InstanceIds: The list of instance IDs.</summary>
        [JsiiProperty(name: "attrInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceIds
        {
            get;
        }

        /// <summary>Attribute TLSPolicies: The list of tls policies.</summary>
        [JsiiProperty(name: "attrTlsPolicies", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTlsPolicies
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.TLSPoliciesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ITLSPoliciesProps Props
        {
            get;
        }

        /// <summary>Represents a `TLSPolicies`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITLSPolicies), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.ITLSPolicies")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ITLSPolicies
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute InstanceIds: The list of instance IDs.</summary>
            [JsiiProperty(name: "attrInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TLSPolicies: The list of tls policies.</summary>
            [JsiiProperty(name: "attrTlsPolicies", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTlsPolicies
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-slb.datasource.TLSPoliciesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ITLSPoliciesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.ITLSPoliciesProps>()!;
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
