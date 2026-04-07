using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Represents a `DBInstanceIPArray`.</summary>
    [JsiiInterface(nativeType: typeof(IDBInstanceIPArray), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.IDBInstanceIPArray")]
    public interface IDBInstanceIPArray : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DBInstanceIPArrayAttribute: The default is empty.</summary>
        /// <remarks>
        /// To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceIpArrayAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceIpArrayAttribute
        {
            get;
        }

        /// <summary>Attribute DBInstanceIPArrayName: The name of the IP address whitelist.</summary>
        /// <remarks>
        /// If you do not specify this parameter, the default whitelist is queried.
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceIpArrayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceIpArrayName
        {
            get;
        }

        /// <summary>Attribute SecurityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats:.</summary>
        [JsiiProperty(name: "attrSecurityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityIpList
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-gpdb.DBInstanceIPArrayProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Gpdb.IDBInstanceIPArrayProps Props
        {
            get;
        }

        /// <summary>Represents a `DBInstanceIPArray`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDBInstanceIPArray), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.IDBInstanceIPArray")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IDBInstanceIPArray
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DBInstanceIPArrayAttribute: The default is empty.</summary>
            /// <remarks>
            /// To distinguish between different attribute values, the console does not display groups with the 'hidden' attribute.
            /// </remarks>
            [JsiiProperty(name: "attrDbInstanceIpArrayAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceIpArrayAttribute
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBInstanceIPArrayName: The name of the IP address whitelist.</summary>
            /// <remarks>
            /// If you do not specify this parameter, the default whitelist is queried.
            /// </remarks>
            [JsiiProperty(name: "attrDbInstanceIpArrayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceIpArrayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityIpList: The IP address whitelist contains a maximum of 1000 IP addresses separated by commas in the following three formats:.</summary>
            [JsiiProperty(name: "attrSecurityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityIpList
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-gpdb.DBInstanceIPArrayProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Gpdb.IDBInstanceIPArrayProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Gpdb.IDBInstanceIPArrayProps>()!;
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
