package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a <code>Cluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.168Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.ClusterProps")
@software.amazon.jsii.Jsii.Proxy(ClusterProps.Jsii$Proxy.class)
public interface ClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterSpecification: Engine specification.
     * <p>
     * [Professional Edition]
     * <p>
     * <ul>
     * <li><code>MSE_SC_2_4_60_c</code>: 2 cores 4GB</li>
     * <li><code>MSE_SC_1_2_60_c</code>: 1 core 2GB</li>
     * <li><code>MSE_SC_4_8_60_c</code>: 4 cores 8GB</li>
     * <li><code>MSE_SC_8_16_60_c</code>: 8 cores 16GB</li>
     * <li><code>MSE_SC_16_32_60_c</code>: 16 cores 32GB</li>
     * </ul>
     * <p>
     * [Development Edition]
     * <p>
     * <ul>
     * <li><code>MSE_SC_1_2_60_c</code>: 1 core 2GB</li>
     * <li><code>MSE_SC_2_4_60_c</code>: 2 cores 4GB</li>
     * </ul>
     * <p>
     * [Serverless Edition]
     * <p>
     * <ul>
     * <li>Ignore this parameter or fill with <code>MSE_SC_SERVERLESS</code>.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterSpecification();

    /**
     * Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterType();

    /**
     * Property clusterVersion: Cluster version.
     * <p>
     * [Professional Edition]
     * <p>
     * <ul>
     * <li><code>NACOS_2_0_0</code>: Nacos 2.x.x version.</li>
     * <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
     * </ul>
     * <p>
     * [Development Edition]
     * <p>
     * <ul>
     * <li><code>NACOS_2_0_0</code>: Nacos 2.x version.</li>
     * <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
     * </ul>
     * <p>
     * [Serverless Edition]
     * <p>
     * <ul>
     * <li><code>NACOS_2_0_0</code>: Nacos 2.x version.</li>
     * <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterVersion();

    /**
     * Property instanceCount: Number of instance nodes. Range: 1~15.
     * <p>
     * [Professional Edition]
     * <p>
     * <ul>
     * <li>Must be &gt;=3 and odd number.</li>
     * </ul>
     * <p>
     * [Development Edition]
     * <p>
     * <ul>
     * <li>Only 1 allowed.</li>
     * </ul>
     * <p>
     * [Serverless Edition]
     * <p>
     * <ul>
     * <li>Ignore this parameter.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceCount();

    /**
     * Property netType: Network type.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><code>privatenet</code>: Private network.</li>
     * <li><code>pubnet</code>: Public network.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetType();

    /**
     * Property aclEntryList: List of ACL entries.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclEntryList() {
        return null;
    }

    /**
     * Property chargeType: Billing mode, including PREPAY (annual/monthly) and POSTPAY (pay-as-you-go).
     * <p>
     * Ignored for Serverless Edition.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property clusterAliasName: cluster alias name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterAliasName() {
        return null;
    }

    /**
     * Property connectionType: Network access type, <code>slb</code> or <code>single_eni</code>;
     * <p>
     * some regions only support <code>single_eni</code> for Development Edition.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionType() {
        return null;
    }

    /**
     * Property eipEnabled: Effective when ConnectionType is <code>single_eni</code>, indicates whether to enable public access (elastic IP).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEipEnabled() {
        return null;
    }

    /**
     * Property mseVersion: Must be filled unless special circumstances.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><code>mse_pro</code>: Professional Edition.</li>
     * <li><code>mse_dev</code>: Development Edition.</li>
     * <li><code>mse_serverless</code>: Serverless Edition.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMseVersion() {
        return null;
    }

    /**
     * Property pubNetworkFlow: Public network flow.
     * <p>
     * Valid when ConnectionType is <code>slb</code>. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPubNetworkFlow() {
        return null;
    }

    /**
     * Property requestPars: Extended request parameters in JSON format.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRequestPars() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property securityGroupType: Effective when ConnectionType is <code>single_eni</code>, represents the security group type of the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupType() {
        return null;
    }

    /**
     * Property tags: Tags to attach to cluster.
     * <p>
     * Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.mse.RosCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vpcId: VPC ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: Switch ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterProps> {
        java.lang.Object clusterSpecification;
        java.lang.Object clusterType;
        java.lang.Object clusterVersion;
        java.lang.Object instanceCount;
        java.lang.Object netType;
        java.lang.Object aclEntryList;
        java.lang.Object chargeType;
        java.lang.Object clusterAliasName;
        java.lang.Object connectionType;
        java.lang.Object eipEnabled;
        java.lang.Object mseVersion;
        java.lang.Object pubNetworkFlow;
        java.lang.Object requestPars;
        java.lang.Object resourceGroupId;
        java.lang.Object securityGroupType;
        java.util.List<com.aliyun.ros.cdk.mse.RosCluster.TagsProperty> tags;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link ClusterProps#getClusterSpecification}
         * @param clusterSpecification Property clusterSpecification: Engine specification. This parameter is required.
         *                             [Professional Edition]
         *                             <p>
         *                             <ul>
         *                             <li><code>MSE_SC_2_4_60_c</code>: 2 cores 4GB</li>
         *                             <li><code>MSE_SC_1_2_60_c</code>: 1 core 2GB</li>
         *                             <li><code>MSE_SC_4_8_60_c</code>: 4 cores 8GB</li>
         *                             <li><code>MSE_SC_8_16_60_c</code>: 8 cores 16GB</li>
         *                             <li><code>MSE_SC_16_32_60_c</code>: 16 cores 32GB</li>
         *                             </ul>
         *                             <p>
         *                             [Development Edition]
         *                             <p>
         *                             <ul>
         *                             <li><code>MSE_SC_1_2_60_c</code>: 1 core 2GB</li>
         *                             <li><code>MSE_SC_2_4_60_c</code>: 2 cores 4GB</li>
         *                             </ul>
         *                             <p>
         *                             [Serverless Edition]
         *                             <p>
         *                             <ul>
         *                             <li>Ignore this parameter or fill with <code>MSE_SC_SERVERLESS</code>.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder clusterSpecification(java.lang.String clusterSpecification) {
            this.clusterSpecification = clusterSpecification;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterSpecification}
         * @param clusterSpecification Property clusterSpecification: Engine specification. This parameter is required.
         *                             [Professional Edition]
         *                             <p>
         *                             <ul>
         *                             <li><code>MSE_SC_2_4_60_c</code>: 2 cores 4GB</li>
         *                             <li><code>MSE_SC_1_2_60_c</code>: 1 core 2GB</li>
         *                             <li><code>MSE_SC_4_8_60_c</code>: 4 cores 8GB</li>
         *                             <li><code>MSE_SC_8_16_60_c</code>: 8 cores 16GB</li>
         *                             <li><code>MSE_SC_16_32_60_c</code>: 16 cores 32GB</li>
         *                             </ul>
         *                             <p>
         *                             [Development Edition]
         *                             <p>
         *                             <ul>
         *                             <li><code>MSE_SC_1_2_60_c</code>: 1 core 2GB</li>
         *                             <li><code>MSE_SC_2_4_60_c</code>: 2 cores 4GB</li>
         *                             </ul>
         *                             <p>
         *                             [Serverless Edition]
         *                             <p>
         *                             <ul>
         *                             <li>Ignore this parameter or fill with <code>MSE_SC_SERVERLESS</code>.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder clusterSpecification(com.aliyun.ros.cdk.core.IResolvable clusterSpecification) {
            this.clusterSpecification = clusterSpecification;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterType}
         * @param clusterType Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterType}
         * @param clusterType Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterVersion}
         * @param clusterVersion Property clusterVersion: Cluster version. This parameter is required.
         *                       [Professional Edition]
         *                       <p>
         *                       <ul>
         *                       <li><code>NACOS_2_0_0</code>: Nacos 2.x.x version.</li>
         *                       <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
         *                       </ul>
         *                       <p>
         *                       [Development Edition]
         *                       <p>
         *                       <ul>
         *                       <li><code>NACOS_2_0_0</code>: Nacos 2.x version.</li>
         *                       <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
         *                       </ul>
         *                       <p>
         *                       [Serverless Edition]
         *                       <p>
         *                       <ul>
         *                       <li><code>NACOS_2_0_0</code>: Nacos 2.x version.</li>
         *                       <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder clusterVersion(java.lang.String clusterVersion) {
            this.clusterVersion = clusterVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterVersion}
         * @param clusterVersion Property clusterVersion: Cluster version. This parameter is required.
         *                       [Professional Edition]
         *                       <p>
         *                       <ul>
         *                       <li><code>NACOS_2_0_0</code>: Nacos 2.x.x version.</li>
         *                       <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
         *                       </ul>
         *                       <p>
         *                       [Development Edition]
         *                       <p>
         *                       <ul>
         *                       <li><code>NACOS_2_0_0</code>: Nacos 2.x version.</li>
         *                       <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
         *                       </ul>
         *                       <p>
         *                       [Serverless Edition]
         *                       <p>
         *                       <ul>
         *                       <li><code>NACOS_2_0_0</code>: Nacos 2.x version.</li>
         *                       <li><code>ZooKeeper_3_8_0</code>: ZooKeeper 3.8.x version.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder clusterVersion(com.aliyun.ros.cdk.core.IResolvable clusterVersion) {
            this.clusterVersion = clusterVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getInstanceCount}
         * @param instanceCount Property instanceCount: Number of instance nodes. Range: 1~15. This parameter is required.
         *                      [Professional Edition]
         *                      <p>
         *                      <ul>
         *                      <li>Must be &gt;=3 and odd number.</li>
         *                      </ul>
         *                      <p>
         *                      [Development Edition]
         *                      <p>
         *                      <ul>
         *                      <li>Only 1 allowed.</li>
         *                      </ul>
         *                      <p>
         *                      [Serverless Edition]
         *                      <p>
         *                      <ul>
         *                      <li>Ignore this parameter.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder instanceCount(java.lang.Number instanceCount) {
            this.instanceCount = instanceCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getInstanceCount}
         * @param instanceCount Property instanceCount: Number of instance nodes. Range: 1~15. This parameter is required.
         *                      [Professional Edition]
         *                      <p>
         *                      <ul>
         *                      <li>Must be &gt;=3 and odd number.</li>
         *                      </ul>
         *                      <p>
         *                      [Development Edition]
         *                      <p>
         *                      <ul>
         *                      <li>Only 1 allowed.</li>
         *                      </ul>
         *                      <p>
         *                      [Serverless Edition]
         *                      <p>
         *                      <ul>
         *                      <li>Ignore this parameter.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder instanceCount(com.aliyun.ros.cdk.core.IResolvable instanceCount) {
            this.instanceCount = instanceCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getNetType}
         * @param netType Property netType: Network type. This parameter is required.
         *                Valid values:
         *                <p>
         *                <ul>
         *                <li><code>privatenet</code>: Private network.</li>
         *                <li><code>pubnet</code>: Public network.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder netType(java.lang.String netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getNetType}
         * @param netType Property netType: Network type. This parameter is required.
         *                Valid values:
         *                <p>
         *                <ul>
         *                <li><code>privatenet</code>: Private network.</li>
         *                <li><code>pubnet</code>: Public network.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder netType(com.aliyun.ros.cdk.core.IResolvable netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAclEntryList}
         * @param aclEntryList Property aclEntryList: List of ACL entries.
         * @return {@code this}
         */
        public Builder aclEntryList(com.aliyun.ros.cdk.core.IResolvable aclEntryList) {
            this.aclEntryList = aclEntryList;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAclEntryList}
         * @param aclEntryList Property aclEntryList: List of ACL entries.
         * @return {@code this}
         */
        public Builder aclEntryList(java.util.List<? extends java.lang.Object> aclEntryList) {
            this.aclEntryList = aclEntryList;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getChargeType}
         * @param chargeType Property chargeType: Billing mode, including PREPAY (annual/monthly) and POSTPAY (pay-as-you-go).
         *                   Ignored for Serverless Edition.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getChargeType}
         * @param chargeType Property chargeType: Billing mode, including PREPAY (annual/monthly) and POSTPAY (pay-as-you-go).
         *                   Ignored for Serverless Edition.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterAliasName}
         * @param clusterAliasName Property clusterAliasName: cluster alias name.
         * @return {@code this}
         */
        public Builder clusterAliasName(java.lang.String clusterAliasName) {
            this.clusterAliasName = clusterAliasName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterAliasName}
         * @param clusterAliasName Property clusterAliasName: cluster alias name.
         * @return {@code this}
         */
        public Builder clusterAliasName(com.aliyun.ros.cdk.core.IResolvable clusterAliasName) {
            this.clusterAliasName = clusterAliasName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getConnectionType}
         * @param connectionType Property connectionType: Network access type, <code>slb</code> or <code>single_eni</code>;.
         *                       some regions only support <code>single_eni</code> for Development Edition.
         * @return {@code this}
         */
        public Builder connectionType(java.lang.String connectionType) {
            this.connectionType = connectionType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getConnectionType}
         * @param connectionType Property connectionType: Network access type, <code>slb</code> or <code>single_eni</code>;.
         *                       some regions only support <code>single_eni</code> for Development Edition.
         * @return {@code this}
         */
        public Builder connectionType(com.aliyun.ros.cdk.core.IResolvable connectionType) {
            this.connectionType = connectionType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEipEnabled}
         * @param eipEnabled Property eipEnabled: Effective when ConnectionType is <code>single_eni</code>, indicates whether to enable public access (elastic IP).
         * @return {@code this}
         */
        public Builder eipEnabled(java.lang.Boolean eipEnabled) {
            this.eipEnabled = eipEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEipEnabled}
         * @param eipEnabled Property eipEnabled: Effective when ConnectionType is <code>single_eni</code>, indicates whether to enable public access (elastic IP).
         * @return {@code this}
         */
        public Builder eipEnabled(com.aliyun.ros.cdk.core.IResolvable eipEnabled) {
            this.eipEnabled = eipEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMseVersion}
         * @param mseVersion Property mseVersion: Must be filled unless special circumstances.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li><code>mse_pro</code>: Professional Edition.</li>
         *                   <li><code>mse_dev</code>: Development Edition.</li>
         *                   <li><code>mse_serverless</code>: Serverless Edition.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder mseVersion(java.lang.String mseVersion) {
            this.mseVersion = mseVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMseVersion}
         * @param mseVersion Property mseVersion: Must be filled unless special circumstances.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li><code>mse_pro</code>: Professional Edition.</li>
         *                   <li><code>mse_dev</code>: Development Edition.</li>
         *                   <li><code>mse_serverless</code>: Serverless Edition.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder mseVersion(com.aliyun.ros.cdk.core.IResolvable mseVersion) {
            this.mseVersion = mseVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPubNetworkFlow}
         * @param pubNetworkFlow Property pubNetworkFlow: Public network flow.
         *                       Valid when ConnectionType is <code>slb</code>. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
         * @return {@code this}
         */
        public Builder pubNetworkFlow(java.lang.Number pubNetworkFlow) {
            this.pubNetworkFlow = pubNetworkFlow;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPubNetworkFlow}
         * @param pubNetworkFlow Property pubNetworkFlow: Public network flow.
         *                       Valid when ConnectionType is <code>slb</code>. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
         * @return {@code this}
         */
        public Builder pubNetworkFlow(com.aliyun.ros.cdk.core.IResolvable pubNetworkFlow) {
            this.pubNetworkFlow = pubNetworkFlow;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getRequestPars}
         * @param requestPars Property requestPars: Extended request parameters in JSON format.
         * @return {@code this}
         */
        public Builder requestPars(java.lang.String requestPars) {
            this.requestPars = requestPars;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getRequestPars}
         * @param requestPars Property requestPars: Extended request parameters in JSON format.
         * @return {@code this}
         */
        public Builder requestPars(com.aliyun.ros.cdk.core.IResolvable requestPars) {
            this.requestPars = requestPars;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSecurityGroupType}
         * @param securityGroupType Property securityGroupType: Effective when ConnectionType is <code>single_eni</code>, represents the security group type of the instance.
         * @return {@code this}
         */
        public Builder securityGroupType(java.lang.String securityGroupType) {
            this.securityGroupType = securityGroupType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSecurityGroupType}
         * @param securityGroupType Property securityGroupType: Effective when ConnectionType is <code>single_eni</code>, represents the security group type of the instance.
         * @return {@code this}
         */
        public Builder securityGroupType(com.aliyun.ros.cdk.core.IResolvable securityGroupType) {
            this.securityGroupType = securityGroupType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getTags}
         * @param tags Property tags: Tags to attach to cluster.
         *             Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.mse.RosCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.mse.RosCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: Switch ID.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: Switch ID.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterProps {
        private final java.lang.Object clusterSpecification;
        private final java.lang.Object clusterType;
        private final java.lang.Object clusterVersion;
        private final java.lang.Object instanceCount;
        private final java.lang.Object netType;
        private final java.lang.Object aclEntryList;
        private final java.lang.Object chargeType;
        private final java.lang.Object clusterAliasName;
        private final java.lang.Object connectionType;
        private final java.lang.Object eipEnabled;
        private final java.lang.Object mseVersion;
        private final java.lang.Object pubNetworkFlow;
        private final java.lang.Object requestPars;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityGroupType;
        private final java.util.List<com.aliyun.ros.cdk.mse.RosCluster.TagsProperty> tags;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterSpecification = software.amazon.jsii.Kernel.get(this, "clusterSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterVersion = software.amazon.jsii.Kernel.get(this, "clusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceCount = software.amazon.jsii.Kernel.get(this, "instanceCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.netType = software.amazon.jsii.Kernel.get(this, "netType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclEntryList = software.amazon.jsii.Kernel.get(this, "aclEntryList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterAliasName = software.amazon.jsii.Kernel.get(this, "clusterAliasName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionType = software.amazon.jsii.Kernel.get(this, "connectionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eipEnabled = software.amazon.jsii.Kernel.get(this, "eipEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mseVersion = software.amazon.jsii.Kernel.get(this, "mseVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pubNetworkFlow = software.amazon.jsii.Kernel.get(this, "pubNetworkFlow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.requestPars = software.amazon.jsii.Kernel.get(this, "requestPars", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupType = software.amazon.jsii.Kernel.get(this, "securityGroupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mse.RosCluster.TagsProperty.class)));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterSpecification = java.util.Objects.requireNonNull(builder.clusterSpecification, "clusterSpecification is required");
            this.clusterType = java.util.Objects.requireNonNull(builder.clusterType, "clusterType is required");
            this.clusterVersion = java.util.Objects.requireNonNull(builder.clusterVersion, "clusterVersion is required");
            this.instanceCount = java.util.Objects.requireNonNull(builder.instanceCount, "instanceCount is required");
            this.netType = java.util.Objects.requireNonNull(builder.netType, "netType is required");
            this.aclEntryList = builder.aclEntryList;
            this.chargeType = builder.chargeType;
            this.clusterAliasName = builder.clusterAliasName;
            this.connectionType = builder.connectionType;
            this.eipEnabled = builder.eipEnabled;
            this.mseVersion = builder.mseVersion;
            this.pubNetworkFlow = builder.pubNetworkFlow;
            this.requestPars = builder.requestPars;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityGroupType = builder.securityGroupType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.mse.RosCluster.TagsProperty>)builder.tags;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
        }

        @Override
        public final java.lang.Object getClusterSpecification() {
            return this.clusterSpecification;
        }

        @Override
        public final java.lang.Object getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Object getClusterVersion() {
            return this.clusterVersion;
        }

        @Override
        public final java.lang.Object getInstanceCount() {
            return this.instanceCount;
        }

        @Override
        public final java.lang.Object getNetType() {
            return this.netType;
        }

        @Override
        public final java.lang.Object getAclEntryList() {
            return this.aclEntryList;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getClusterAliasName() {
            return this.clusterAliasName;
        }

        @Override
        public final java.lang.Object getConnectionType() {
            return this.connectionType;
        }

        @Override
        public final java.lang.Object getEipEnabled() {
            return this.eipEnabled;
        }

        @Override
        public final java.lang.Object getMseVersion() {
            return this.mseVersion;
        }

        @Override
        public final java.lang.Object getPubNetworkFlow() {
            return this.pubNetworkFlow;
        }

        @Override
        public final java.lang.Object getRequestPars() {
            return this.requestPars;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupType() {
            return this.securityGroupType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.mse.RosCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterSpecification", om.valueToTree(this.getClusterSpecification()));
            data.set("clusterType", om.valueToTree(this.getClusterType()));
            data.set("clusterVersion", om.valueToTree(this.getClusterVersion()));
            data.set("instanceCount", om.valueToTree(this.getInstanceCount()));
            data.set("netType", om.valueToTree(this.getNetType()));
            if (this.getAclEntryList() != null) {
                data.set("aclEntryList", om.valueToTree(this.getAclEntryList()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getClusterAliasName() != null) {
                data.set("clusterAliasName", om.valueToTree(this.getClusterAliasName()));
            }
            if (this.getConnectionType() != null) {
                data.set("connectionType", om.valueToTree(this.getConnectionType()));
            }
            if (this.getEipEnabled() != null) {
                data.set("eipEnabled", om.valueToTree(this.getEipEnabled()));
            }
            if (this.getMseVersion() != null) {
                data.set("mseVersion", om.valueToTree(this.getMseVersion()));
            }
            if (this.getPubNetworkFlow() != null) {
                data.set("pubNetworkFlow", om.valueToTree(this.getPubNetworkFlow()));
            }
            if (this.getRequestPars() != null) {
                data.set("requestPars", om.valueToTree(this.getRequestPars()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityGroupType() != null) {
                data.set("securityGroupType", om.valueToTree(this.getSecurityGroupType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.ClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterProps.Jsii$Proxy that = (ClusterProps.Jsii$Proxy) o;

            if (!clusterSpecification.equals(that.clusterSpecification)) return false;
            if (!clusterType.equals(that.clusterType)) return false;
            if (!clusterVersion.equals(that.clusterVersion)) return false;
            if (!instanceCount.equals(that.instanceCount)) return false;
            if (!netType.equals(that.netType)) return false;
            if (this.aclEntryList != null ? !this.aclEntryList.equals(that.aclEntryList) : that.aclEntryList != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.clusterAliasName != null ? !this.clusterAliasName.equals(that.clusterAliasName) : that.clusterAliasName != null) return false;
            if (this.connectionType != null ? !this.connectionType.equals(that.connectionType) : that.connectionType != null) return false;
            if (this.eipEnabled != null ? !this.eipEnabled.equals(that.eipEnabled) : that.eipEnabled != null) return false;
            if (this.mseVersion != null ? !this.mseVersion.equals(that.mseVersion) : that.mseVersion != null) return false;
            if (this.pubNetworkFlow != null ? !this.pubNetworkFlow.equals(that.pubNetworkFlow) : that.pubNetworkFlow != null) return false;
            if (this.requestPars != null ? !this.requestPars.equals(that.requestPars) : that.requestPars != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityGroupType != null ? !this.securityGroupType.equals(that.securityGroupType) : that.securityGroupType != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            return this.vSwitchId != null ? this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterSpecification.hashCode();
            result = 31 * result + (this.clusterType.hashCode());
            result = 31 * result + (this.clusterVersion.hashCode());
            result = 31 * result + (this.instanceCount.hashCode());
            result = 31 * result + (this.netType.hashCode());
            result = 31 * result + (this.aclEntryList != null ? this.aclEntryList.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.clusterAliasName != null ? this.clusterAliasName.hashCode() : 0);
            result = 31 * result + (this.connectionType != null ? this.connectionType.hashCode() : 0);
            result = 31 * result + (this.eipEnabled != null ? this.eipEnabled.hashCode() : 0);
            result = 31 * result + (this.mseVersion != null ? this.mseVersion.hashCode() : 0);
            result = 31 * result + (this.pubNetworkFlow != null ? this.pubNetworkFlow.hashCode() : 0);
            result = 31 * result + (this.requestPars != null ? this.requestPars.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupType != null ? this.securityGroupType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
