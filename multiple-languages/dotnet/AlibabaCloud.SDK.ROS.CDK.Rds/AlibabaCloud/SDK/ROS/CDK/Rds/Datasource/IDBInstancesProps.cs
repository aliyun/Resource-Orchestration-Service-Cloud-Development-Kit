using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds.Datasource
{
    /// <summary>Properties for defining a `DBInstances`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstances
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.DBInstancesProps")]
    public interface IDBInstancesProps
    {
        /// <summary>Property connectionMode: The connection mode of the instance.</summary>
        [JsiiProperty(name: "connectionMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectionMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property connectionString: The endpoint of the instance.</summary>
        [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectionString
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceClass: The instance type of the instances.</summary>
        [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceClass
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceStatus: The status of the instances.</summary>
        [JsiiProperty(name: "dbInstanceStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceType: The role of the instances.</summary>
        [JsiiProperty(name: "dbInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.</summary>
        [JsiiProperty(name: "dedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.</summary>
        [JsiiProperty(name: "dedicatedHostId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property engine: The database engine that is run by the instances.</summary>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Engine
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property engineVersion: The version of the database engine that is run by the instances.</summary>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EngineVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property expired: Specifies whether the instances have expired.</summary>
        [JsiiProperty(name: "expired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Expired
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.</summary>
        [JsiiProperty(name: "instanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceNetworkType: The network type of the instances.</summary>
        [JsiiProperty(name: "instanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceNetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property payType: The billing method of the instances.</summary>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PayType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proxyId: The ID of the proxy mode.</summary>
        [JsiiProperty(name: "proxyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the instances belong.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.</summary>
        [JsiiProperty(name: "searchKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SearchKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The ID of the zone to which the instances belong.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DBInstances`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstances
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.DBInstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IDBInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property connectionMode: The connection mode of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "connectionMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConnectionMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property connectionString: The endpoint of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConnectionString
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceClass: The instance type of the instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceClass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceId: The ID of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceStatus: The status of the instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceType: The role of the instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property engine: The database engine that is run by the instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Engine
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property engineVersion: The version of the database engine that is run by the instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EngineVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property expired: Specifies whether the instances have expired.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "expired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Expired
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceNetworkType: The network type of the instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceNetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property payType: The billing method of the instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PayType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property proxyId: The ID of the proxy mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "proxyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the instances belong.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "searchKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SearchKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The ID of the zone to which the instances belong.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
