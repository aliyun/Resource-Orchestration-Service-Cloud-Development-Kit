using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse
{
    /// <summary>Represents a `EnterpriseDBClusterSecurityIP`.</summary>
    [JsiiInterface(nativeType: typeof(IEnterpriseDBClusterSecurityIP), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.IEnterpriseDBClusterSecurityIP")]
    public interface IEnterpriseDBClusterSecurityIP : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute GroupName: The name of the whitelist whose settings you want to modify.</summary>
        [JsiiProperty(name: "attrGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGroupName
        {
            get;
        }

        /// <summary>Attribute SecurityIpList: The IP addresses and CIDR blocks in the whitelist.</summary>
        [JsiiProperty(name: "attrSecurityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityIpList
        {
            get;
        }

        /// <summary>Attribute SecurityIpType: The type of IP address.</summary>
        [JsiiProperty(name: "attrSecurityIpType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityIpType
        {
            get;
        }

        /// <summary>Attribute WhitelistNetType: The network type of the whitelist.</summary>
        [JsiiProperty(name: "attrWhitelistNetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWhitelistNetType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterSecurityIPProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterSecurityIPProps Props
        {
            get;
        }

        /// <summary>Represents a `EnterpriseDBClusterSecurityIP`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEnterpriseDBClusterSecurityIP), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.IEnterpriseDBClusterSecurityIP")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterSecurityIP
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute GroupName: The name of the whitelist whose settings you want to modify.</summary>
            [JsiiProperty(name: "attrGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityIpList: The IP addresses and CIDR blocks in the whitelist.</summary>
            [JsiiProperty(name: "attrSecurityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityIpList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityIpType: The type of IP address.</summary>
            [JsiiProperty(name: "attrSecurityIpType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityIpType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WhitelistNetType: The network type of the whitelist.</summary>
            [JsiiProperty(name: "attrWhitelistNetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWhitelistNetType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterSecurityIPProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterSecurityIPProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterSecurityIPProps>()!;
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
