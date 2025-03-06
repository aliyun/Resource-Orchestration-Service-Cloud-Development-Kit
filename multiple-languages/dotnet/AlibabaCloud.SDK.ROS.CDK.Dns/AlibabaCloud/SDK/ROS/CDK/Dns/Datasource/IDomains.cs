using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns.Datasource
{
    /// <summary>Represents a `Domains`.</summary>
    [JsiiInterface(nativeType: typeof(IDomains), fullyQualifiedName: "@alicloud/ros-cdk-dns.datasource.IDomains")]
    public interface IDomains : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DomainIds: The list of The DNS domain ids.</summary>
        [JsiiProperty(name: "attrDomainIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomainIds
        {
            get;
        }

        /// <summary>Attribute Domains: The information about DNS domains.</summary>
        [JsiiProperty(name: "attrDomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomains
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dns.datasource.DomainsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dns.Datasource.IDomainsProps Props
        {
            get;
        }

        /// <summary>Represents a `Domains`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDomains), fullyQualifiedName: "@alicloud/ros-cdk-dns.datasource.IDomains")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.Datasource.IDomains
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DomainIds: The list of The DNS domain ids.</summary>
            [JsiiProperty(name: "attrDomainIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomainIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Domains: The information about DNS domains.</summary>
            [JsiiProperty(name: "attrDomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomains
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dns.datasource.DomainsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dns.Datasource.IDomainsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dns.Datasource.IDomainsProps>()!;
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
