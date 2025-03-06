using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc.Datasource
{
    /// <summary>Represents a `CustomDomains`.</summary>
    [JsiiInterface(nativeType: typeof(ICustomDomains), fullyQualifiedName: "@alicloud/ros-cdk-fc.datasource.ICustomDomains")]
    public interface ICustomDomains : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CustomDomains: The list of custom_domain.</summary>
        [JsiiProperty(name: "attrCustomDomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCustomDomains
        {
            get;
        }

        /// <summary>Attribute DomainNames: The list of custom_domain names.</summary>
        [JsiiProperty(name: "attrDomainNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDomainNames
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fc.datasource.CustomDomainsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Fc.Datasource.ICustomDomainsProps Props
        {
            get;
        }

        /// <summary>Represents a `CustomDomains`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICustomDomains), fullyQualifiedName: "@alicloud/ros-cdk-fc.datasource.ICustomDomains")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.Datasource.ICustomDomains
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CustomDomains: The list of custom_domain.</summary>
            [JsiiProperty(name: "attrCustomDomains", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCustomDomains
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DomainNames: The list of custom_domain names.</summary>
            [JsiiProperty(name: "attrDomainNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDomainNames
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fc.datasource.CustomDomainsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Fc.Datasource.ICustomDomainsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fc.Datasource.ICustomDomainsProps>()!;
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
