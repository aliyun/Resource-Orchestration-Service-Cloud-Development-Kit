using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource
{
    /// <summary>Represents a `Domains`.</summary>
    [JsiiInterface(nativeType: typeof(IDomains), fullyQualifiedName: "@alicloud/ros-cdk-directmail.datasource.IDomains")]
    public interface IDomains : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DomainIds: The list of domain IDs.</summary>
        [JsiiProperty(name: "attrDomainIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomainIds
        {
            get;
        }

        /// <summary>Attribute Domains: The list of domains.</summary>
        [JsiiProperty(name: "attrDomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomains
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-directmail.datasource.DomainsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource.IDomainsProps Props
        {
            get;
        }

        /// <summary>Represents a `Domains`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDomains), fullyQualifiedName: "@alicloud/ros-cdk-directmail.datasource.IDomains")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource.IDomains
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DomainIds: The list of domain IDs.</summary>
            [JsiiProperty(name: "attrDomainIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomainIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Domains: The list of domains.</summary>
            [JsiiProperty(name: "attrDomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomains
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-directmail.datasource.DomainsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource.IDomainsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource.IDomainsProps>()!;
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
