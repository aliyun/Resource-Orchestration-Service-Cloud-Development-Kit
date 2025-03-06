using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Represents a `DBInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IDBInstance), fullyQualifiedName: "@alicloud/ros-cdk-rds.IDBInstance")]
    public interface IDBInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DBInstanceId: The instance id of created database instance.</summary>
        [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceId
        {
            get;
        }

        /// <summary>Attribute InnerConnectionString: DB instance connection url by Intranet.</summary>
        [JsiiProperty(name: "attrInnerConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInnerConnectionString
        {
            get;
        }

        /// <summary>Attribute InnerIPAddress: IP Address for created DB instance of Intranet.</summary>
        [JsiiProperty(name: "attrInnerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInnerIpAddress
        {
            get;
        }

        /// <summary>Attribute InnerPort: Intranet port of created DB instance.</summary>
        [JsiiProperty(name: "attrInnerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInnerPort
        {
            get;
        }

        /// <summary>Attribute PublicConnectionString: DB instance connection url by Internet.</summary>
        [JsiiProperty(name: "attrPublicConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicConnectionString
        {
            get;
        }

        /// <summary>Attribute PublicIPAddress: IP Address for created DB instance of Internet.</summary>
        [JsiiProperty(name: "attrPublicIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicIpAddress
        {
            get;
        }

        /// <summary>Attribute PublicPort: Internet port of created DB instance.</summary>
        [JsiiProperty(name: "attrPublicPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPublicPort
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-rds.DBInstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Rds.IDBInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `DBInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDBInstance), fullyQualifiedName: "@alicloud/ros-cdk-rds.IDBInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IDBInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DBInstanceId: The instance id of created database instance.</summary>
            [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InnerConnectionString: DB instance connection url by Intranet.</summary>
            [JsiiProperty(name: "attrInnerConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInnerConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InnerIPAddress: IP Address for created DB instance of Intranet.</summary>
            [JsiiProperty(name: "attrInnerIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInnerIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InnerPort: Intranet port of created DB instance.</summary>
            [JsiiProperty(name: "attrInnerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInnerPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicConnectionString: DB instance connection url by Internet.</summary>
            [JsiiProperty(name: "attrPublicConnectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicConnectionString
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicIPAddress: IP Address for created DB instance of Internet.</summary>
            [JsiiProperty(name: "attrPublicIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PublicPort: Internet port of created DB instance.</summary>
            [JsiiProperty(name: "attrPublicPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPublicPort
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-rds.DBInstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Rds.IDBInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Rds.IDBInstanceProps>()!;
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
