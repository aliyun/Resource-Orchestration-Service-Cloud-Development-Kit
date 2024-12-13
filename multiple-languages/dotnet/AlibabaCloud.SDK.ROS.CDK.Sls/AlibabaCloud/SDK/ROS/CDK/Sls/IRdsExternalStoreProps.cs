using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    /// <summary>Properties for defining a `RdsExternalStore`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-rdsexternalstore
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRdsExternalStoreProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RdsExternalStoreProps")]
    public interface IRdsExternalStoreProps
    {
        /// <summary>Property db: The name of the database in the ApsaraDB RDS for MySQL instance.</summary>
        [JsiiProperty(name: "db", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Db
        {
            get;
        }

        /// <summary>Property externalStoreName: The name of the external store.</summary>
        /// <remarks>
        /// The name must be unique in a project and different from Logstore.
        /// </remarks>
        [JsiiProperty(name: "externalStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExternalStoreName
        {
            get;
        }

        /// <summary>Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance.</summary>
        [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Host
        {
            get;
        }

        /// <summary>Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance.</summary>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Password
        {
            get;
        }

        /// <summary>Property port: The internal or public port of the ApsaraDB RDS for MySQL instance.</summary>
        [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Port
        {
            get;
        }

        /// <summary>Property project: The name of the project.</summary>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Project
        {
            get;
        }

        /// <summary>Property region: The region where the ApsaraDB RDS for MySQL instance resides.</summary>
        /// <remarks>
        /// Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Region
        {
            get;
        }

        /// <summary>Property storeType: The storage type.</summary>
        /// <remarks>
        /// Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
        /// </remarks>
        [JsiiProperty(name: "storeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StoreType
        {
            get;
        }

        /// <summary>Property table: The name of the database table in the ApsaraDB RDS for MySQL instance.</summary>
        [JsiiProperty(name: "table", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Table
        {
            get;
        }

        /// <summary>Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance.</summary>
        [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Username
        {
            get;
        }

        /// <summary>Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property instanceId: The id of the RDS instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RdsExternalStore`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-rdsexternalstore
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRdsExternalStoreProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.RdsExternalStoreProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.IRdsExternalStoreProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property db: The name of the database in the ApsaraDB RDS for MySQL instance.</summary>
            [JsiiProperty(name: "db", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Db
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property externalStoreName: The name of the external store.</summary>
            /// <remarks>
            /// The name must be unique in a project and different from Logstore.
            /// </remarks>
            [JsiiProperty(name: "externalStoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExternalStoreName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property host: The internal or public endpoint of the ApsaraDB RDS for MySQL instance.</summary>
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Host
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property password: The password that is used to log on to the ApsaraDB RDS for MySQL instance.</summary>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Password
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property port: The internal or public port of the ApsaraDB RDS for MySQL instance.</summary>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Port
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property project: The name of the project.</summary>
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Project
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property region: The region where the ApsaraDB RDS for MySQL instance resides.</summary>
            /// <remarks>
            /// Valid values: cn-qingdao, cn-beijing, cn-hangzhou.
            /// </remarks>
            [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Region
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property storeType: The storage type.</summary>
            /// <remarks>
            /// Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
            /// </remarks>
            [JsiiProperty(name: "storeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StoreType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property table: The name of the database table in the ApsaraDB RDS for MySQL instance.</summary>
            [JsiiProperty(name: "table", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Table
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property username: The username that is used to log on to the ApsaraDB RDS for MySQL instance.</summary>
            [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Username
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The id of the RDS instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
