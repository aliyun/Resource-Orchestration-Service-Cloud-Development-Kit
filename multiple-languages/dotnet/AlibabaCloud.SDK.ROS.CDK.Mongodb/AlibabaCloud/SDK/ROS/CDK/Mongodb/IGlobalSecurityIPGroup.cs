using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Represents a `GlobalSecurityIPGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IGlobalSecurityIPGroup), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.IGlobalSecurityIPGroup")]
    public interface IGlobalSecurityIPGroup : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute GlobalIgName: The name of the IP whitelist template.</summary>
        [JsiiProperty(name: "attrGlobalIgName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGlobalIgName
        {
            get;
        }

        /// <summary>Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.</summary>
        [JsiiProperty(name: "attrGlobalSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGlobalSecurityGroupId
        {
            get;
        }

        /// <summary>Attribute GlobalSecurityIpList: The IP address in the whitelist template.</summary>
        [JsiiProperty(name: "attrGlobalSecurityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGlobalSecurityIpList
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mongodb.GlobalSecurityIPGroupProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mongodb.IGlobalSecurityIPGroupProps Props
        {
            get;
        }

        /// <summary>Represents a `GlobalSecurityIPGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IGlobalSecurityIPGroup), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.IGlobalSecurityIPGroup")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IGlobalSecurityIPGroup
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute GlobalIgName: The name of the IP whitelist template.</summary>
            [JsiiProperty(name: "attrGlobalIgName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGlobalIgName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.</summary>
            [JsiiProperty(name: "attrGlobalSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGlobalSecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GlobalSecurityIpList: The IP address in the whitelist template.</summary>
            [JsiiProperty(name: "attrGlobalSecurityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGlobalSecurityIpList
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mongodb.GlobalSecurityIPGroupProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mongodb.IGlobalSecurityIPGroupProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mongodb.IGlobalSecurityIPGroupProps>()!;
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
