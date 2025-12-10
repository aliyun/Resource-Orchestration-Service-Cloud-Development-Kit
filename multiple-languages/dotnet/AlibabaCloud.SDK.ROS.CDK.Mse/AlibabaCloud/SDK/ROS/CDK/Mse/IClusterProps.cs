using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `Cluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.ClusterProps")]
    public interface IClusterProps
    {
        /// <summary>Property clusterSpecification: Engine specification.</summary>
        /// <remarks>
        /// [Professional Edition]
        ///
        /// <list type="bullet">
        /// <description><c>MSE_SC_2_4_60_c</c>: 2 cores 4GB</description>
        /// <description><c>MSE_SC_1_2_60_c</c>: 1 core 2GB</description>
        /// <description><c>MSE_SC_4_8_60_c</c>: 4 cores 8GB</description>
        /// <description><c>MSE_SC_8_16_60_c</c>: 8 cores 16GB</description>
        /// <description><c>MSE_SC_16_32_60_c</c>: 16 cores 32GB</description>
        /// </list>
        ///
        /// [Development Edition]
        ///
        /// <list type="bullet">
        /// <description><c>MSE_SC_1_2_60_c</c>: 1 core 2GB</description>
        /// <description><c>MSE_SC_2_4_60_c</c>: 2 cores 4GB</description>
        /// </list>
        ///
        /// [Serverless Edition]
        ///
        /// <list type="bullet">
        /// <description>Ignore this parameter or fill with <c>MSE_SC_SERVERLESS</c>.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "clusterSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterSpecification
        {
            get;
        }

        /// <summary>Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans.</summary>
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterType
        {
            get;
        }

        /// <summary>Property clusterVersion: Cluster version.</summary>
        /// <remarks>
        /// [Professional Edition]
        ///
        /// <list type="bullet">
        /// <description><c>NACOS_2_0_0</c>: Nacos 2.x.x version.</description>
        /// <description><c>ZooKeeper_3_8_0</c>: ZooKeeper 3.8.x version.</description>
        /// </list>
        ///
        /// [Development Edition]
        ///
        /// <list type="bullet">
        /// <description><c>NACOS_2_0_0</c>: Nacos 2.x version.</description>
        /// <description><c>ZooKeeper_3_8_0</c>: ZooKeeper 3.8.x version.</description>
        /// </list>
        ///
        /// [Serverless Edition]
        ///
        /// <list type="bullet">
        /// <description><c>NACOS_2_0_0</c>: Nacos 2.x version.</description>
        /// <description><c>ZooKeeper_3_8_0</c>: ZooKeeper 3.8.x version.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "clusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterVersion
        {
            get;
        }

        /// <summary>Property instanceCount: Number of instance nodes. Range: 1~15.</summary>
        /// <remarks>
        /// [Professional Edition]
        ///
        /// <list type="bullet">
        /// <description>Must be &gt;=3 and odd number.</description>
        /// </list>
        ///
        /// [Development Edition]
        ///
        /// <list type="bullet">
        /// <description>Only 1 allowed.</description>
        /// </list>
        ///
        /// [Serverless Edition]
        ///
        /// <list type="bullet">
        /// <description>Ignore this parameter.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "instanceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceCount
        {
            get;
        }

        /// <summary>Property netType: Network type.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>privatenet</c>: Private network.</description>
        /// <description><c>pubnet</c>: Public network.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "netType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetType
        {
            get;
        }

        /// <summary>Property aclEntryList: List of ACL entries.</summary>
        [JsiiProperty(name: "aclEntryList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AclEntryList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property chargeType: Billing mode, including PREPAY (annual\/monthly) and POSTPAY (pay-as-you-go).</summary>
        /// <remarks>
        /// Ignored for Serverless Edition.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clusterAliasName: cluster alias name.</summary>
        [JsiiProperty(name: "clusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterAliasName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property connectionType: Network access type, `slb` or `single_eni`;</summary>
        /// <remarks>
        /// some regions only support <c>single_eni</c> for Development Edition.
        /// </remarks>
        [JsiiProperty(name: "connectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectionType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property eipEnabled: Effective when ConnectionType is `single_eni`, indicates whether to enable public access (elastic IP).</summary>
        [JsiiProperty(name: "eipEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EipEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mseVersion: Must be filled unless special circumstances.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><c>mse_pro</c>: Professional Edition.</description>
        /// <description><c>mse_dev</c>: Development Edition.</description>
        /// <description><c>mse_serverless</c>: Serverless Edition.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "mseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MseVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pubNetworkFlow: Public network flow.</summary>
        /// <remarks>
        /// Valid when ConnectionType is <c>slb</c>. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
        /// </remarks>
        [JsiiProperty(name: "pubNetworkFlow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PubNetworkFlow
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property requestPars: Extended request parameters in JSON format.</summary>
        [JsiiProperty(name: "requestPars", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RequestPars
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupType: Effective when ConnectionType is `single_eni`, represents the security group type of the instance.</summary>
        [JsiiProperty(name: "securityGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to cluster.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-mse.RosCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Mse.RosCluster.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: VPC ID.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: Switch ID.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Cluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.ClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterSpecification: Engine specification.</summary>
            /// <remarks>
            /// [Professional Edition]
            ///
            /// <list type="bullet">
            /// <description><c>MSE_SC_2_4_60_c</c>: 2 cores 4GB</description>
            /// <description><c>MSE_SC_1_2_60_c</c>: 1 core 2GB</description>
            /// <description><c>MSE_SC_4_8_60_c</c>: 4 cores 8GB</description>
            /// <description><c>MSE_SC_8_16_60_c</c>: 8 cores 16GB</description>
            /// <description><c>MSE_SC_16_32_60_c</c>: 16 cores 32GB</description>
            /// </list>
            ///
            /// [Development Edition]
            ///
            /// <list type="bullet">
            /// <description><c>MSE_SC_1_2_60_c</c>: 1 core 2GB</description>
            /// <description><c>MSE_SC_2_4_60_c</c>: 2 cores 4GB</description>
            /// </list>
            ///
            /// [Serverless Edition]
            ///
            /// <list type="bullet">
            /// <description>Ignore this parameter or fill with <c>MSE_SC_SERVERLESS</c>.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "clusterSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterSpecification
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans.</summary>
            [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property clusterVersion: Cluster version.</summary>
            /// <remarks>
            /// [Professional Edition]
            ///
            /// <list type="bullet">
            /// <description><c>NACOS_2_0_0</c>: Nacos 2.x.x version.</description>
            /// <description><c>ZooKeeper_3_8_0</c>: ZooKeeper 3.8.x version.</description>
            /// </list>
            ///
            /// [Development Edition]
            ///
            /// <list type="bullet">
            /// <description><c>NACOS_2_0_0</c>: Nacos 2.x version.</description>
            /// <description><c>ZooKeeper_3_8_0</c>: ZooKeeper 3.8.x version.</description>
            /// </list>
            ///
            /// [Serverless Edition]
            ///
            /// <list type="bullet">
            /// <description><c>NACOS_2_0_0</c>: Nacos 2.x version.</description>
            /// <description><c>ZooKeeper_3_8_0</c>: ZooKeeper 3.8.x version.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "clusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceCount: Number of instance nodes. Range: 1~15.</summary>
            /// <remarks>
            /// [Professional Edition]
            ///
            /// <list type="bullet">
            /// <description>Must be &gt;=3 and odd number.</description>
            /// </list>
            ///
            /// [Development Edition]
            ///
            /// <list type="bullet">
            /// <description>Only 1 allowed.</description>
            /// </list>
            ///
            /// [Serverless Edition]
            ///
            /// <list type="bullet">
            /// <description>Ignore this parameter.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "instanceCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property netType: Network type.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>privatenet</c>: Private network.</description>
            /// <description><c>pubnet</c>: Public network.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "netType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aclEntryList: List of ACL entries.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "aclEntryList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AclEntryList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chargeType: Billing mode, including PREPAY (annual\/monthly) and POSTPAY (pay-as-you-go).</summary>
            /// <remarks>
            /// Ignored for Serverless Edition.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clusterAliasName: cluster alias name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterAliasName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property connectionType: Network access type, `slb` or `single_eni`;</summary>
            /// <remarks>
            /// some regions only support <c>single_eni</c> for Development Edition.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "connectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConnectionType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property eipEnabled: Effective when ConnectionType is `single_eni`, indicates whether to enable public access (elastic IP).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "eipEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EipEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mseVersion: Must be filled unless special circumstances.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><c>mse_pro</c>: Professional Edition.</description>
            /// <description><c>mse_dev</c>: Development Edition.</description>
            /// <description><c>mse_serverless</c>: Serverless Edition.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MseVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pubNetworkFlow: Public network flow.</summary>
            /// <remarks>
            /// Valid when ConnectionType is <c>slb</c>. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pubNetworkFlow", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PubNetworkFlow
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property requestPars: Extended request parameters in JSON format.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "requestPars", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RequestPars
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupType: Effective when ConnectionType is `single_eni`, represents the security group type of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to cluster.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-mse.RosCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Mse.RosCluster.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mse.RosCluster.ITagsProperty[]?>();
            }

            /// <summary>Property vpcId: VPC ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: Switch ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
