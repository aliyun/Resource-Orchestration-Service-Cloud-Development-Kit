package com.aliyun.ros.cdk.mse;

/**
 * Properties for defining a `ALIYUN::MSE::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:25.828Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.ClusterProps")
@software.amazon.jsii.Jsii.Proxy(ClusterProps.Jsii$Proxy.class)
public interface ClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterSpecification();

    /**
     * Property clusterType: cluster type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterType();

    /**
     * Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_2_1,NACOS_2_0_0.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterVersion();

    /**
     * Property instanceCount: instance count.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceCount();

    /**
     * Property netType: network type, Enum: privatenet,pubnet.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetType();

    /**
     * Property acceptLanguage:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcceptLanguage() {
        return null;
    }

    /**
     * Property aclEntryList: acl entry list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAclEntryList() {
        return null;
    }

    /**
     * Property clusterAliasName: cluster alias name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterAliasName() {
        return null;
    }

    /**
     * Property connectionType: network connect type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionType() {
        return null;
    }

    /**
     * Property diskType: disk type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskType() {
        return null;
    }

    /**
     * Property mseVersion: This parameter is required when creating a professional version. The value is as follows:.
     * <p>
     * -'mse_basic': indicates the basic version (default value).
     * -'mse_pro': means professional version.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMseVersion() {
        return null;
    }

    /**
     * Property privateSlbSpecification:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateSlbSpecification() {
        return null;
    }

    /**
     * Property pubNetworkFlow: pub network flow.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPubNetworkFlow() {
        return null;
    }

    /**
     * Property pubSlbSpecification:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPubSlbSpecification() {
        return null;
    }

    /**
     * Property requestPars:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRequestPars() {
        return null;
    }

    /**
     * Property vpcId: vpc id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: switcher Id.
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
        java.lang.Object acceptLanguage;
        java.lang.Object aclEntryList;
        java.lang.Object clusterAliasName;
        java.lang.Object connectionType;
        java.lang.Object diskType;
        java.lang.Object mseVersion;
        java.lang.Object privateSlbSpecification;
        java.lang.Object pubNetworkFlow;
        java.lang.Object pubSlbSpecification;
        java.lang.Object requestPars;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;

        /**
         * Sets the value of {@link ClusterProps#getClusterSpecification}
         * @param clusterSpecification Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterSpecification(java.lang.String clusterSpecification) {
            this.clusterSpecification = clusterSpecification;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterSpecification}
         * @param clusterSpecification Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterSpecification(com.aliyun.ros.cdk.core.IResolvable clusterSpecification) {
            this.clusterSpecification = clusterSpecification;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterType}
         * @param clusterType Property clusterType: cluster type. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterType}
         * @param clusterType Property clusterType: cluster type. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterVersion}
         * @param clusterVersion Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_2_1,NACOS_2_0_0. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterVersion(java.lang.String clusterVersion) {
            this.clusterVersion = clusterVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterVersion}
         * @param clusterVersion Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_2_1,NACOS_2_0_0. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterVersion(com.aliyun.ros.cdk.core.IResolvable clusterVersion) {
            this.clusterVersion = clusterVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getInstanceCount}
         * @param instanceCount Property instanceCount: instance count. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceCount(java.lang.Number instanceCount) {
            this.instanceCount = instanceCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getInstanceCount}
         * @param instanceCount Property instanceCount: instance count. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceCount(com.aliyun.ros.cdk.core.IResolvable instanceCount) {
            this.instanceCount = instanceCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getNetType}
         * @param netType Property netType: network type, Enum: privatenet,pubnet. This parameter is required.
         * @return {@code this}
         */
        public Builder netType(java.lang.String netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getNetType}
         * @param netType Property netType: network type, Enum: privatenet,pubnet. This parameter is required.
         * @return {@code this}
         */
        public Builder netType(com.aliyun.ros.cdk.core.IResolvable netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAcceptLanguage}
         * @param acceptLanguage Property acceptLanguage:.
         * @return {@code this}
         */
        public Builder acceptLanguage(java.lang.String acceptLanguage) {
            this.acceptLanguage = acceptLanguage;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAcceptLanguage}
         * @param acceptLanguage Property acceptLanguage:.
         * @return {@code this}
         */
        public Builder acceptLanguage(com.aliyun.ros.cdk.core.IResolvable acceptLanguage) {
            this.acceptLanguage = acceptLanguage;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAclEntryList}
         * @param aclEntryList Property aclEntryList: acl entry list.
         * @return {@code this}
         */
        public Builder aclEntryList(com.aliyun.ros.cdk.core.IResolvable aclEntryList) {
            this.aclEntryList = aclEntryList;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAclEntryList}
         * @param aclEntryList Property aclEntryList: acl entry list.
         * @return {@code this}
         */
        public Builder aclEntryList(java.util.List<? extends java.lang.Object> aclEntryList) {
            this.aclEntryList = aclEntryList;
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
         * @param connectionType Property connectionType: network connect type.
         * @return {@code this}
         */
        public Builder connectionType(java.lang.String connectionType) {
            this.connectionType = connectionType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getConnectionType}
         * @param connectionType Property connectionType: network connect type.
         * @return {@code this}
         */
        public Builder connectionType(com.aliyun.ros.cdk.core.IResolvable connectionType) {
            this.connectionType = connectionType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDiskType}
         * @param diskType Property diskType: disk type.
         * @return {@code this}
         */
        public Builder diskType(java.lang.String diskType) {
            this.diskType = diskType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDiskType}
         * @param diskType Property diskType: disk type.
         * @return {@code this}
         */
        public Builder diskType(com.aliyun.ros.cdk.core.IResolvable diskType) {
            this.diskType = diskType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMseVersion}
         * @param mseVersion Property mseVersion: This parameter is required when creating a professional version. The value is as follows:.
         *                   -'mse_basic': indicates the basic version (default value).
         *                   -'mse_pro': means professional version.
         * @return {@code this}
         */
        public Builder mseVersion(java.lang.String mseVersion) {
            this.mseVersion = mseVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMseVersion}
         * @param mseVersion Property mseVersion: This parameter is required when creating a professional version. The value is as follows:.
         *                   -'mse_basic': indicates the basic version (default value).
         *                   -'mse_pro': means professional version.
         * @return {@code this}
         */
        public Builder mseVersion(com.aliyun.ros.cdk.core.IResolvable mseVersion) {
            this.mseVersion = mseVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPrivateSlbSpecification}
         * @param privateSlbSpecification Property privateSlbSpecification:.
         * @return {@code this}
         */
        public Builder privateSlbSpecification(java.lang.String privateSlbSpecification) {
            this.privateSlbSpecification = privateSlbSpecification;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPrivateSlbSpecification}
         * @param privateSlbSpecification Property privateSlbSpecification:.
         * @return {@code this}
         */
        public Builder privateSlbSpecification(com.aliyun.ros.cdk.core.IResolvable privateSlbSpecification) {
            this.privateSlbSpecification = privateSlbSpecification;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPubNetworkFlow}
         * @param pubNetworkFlow Property pubNetworkFlow: pub network flow.
         * @return {@code this}
         */
        public Builder pubNetworkFlow(java.lang.String pubNetworkFlow) {
            this.pubNetworkFlow = pubNetworkFlow;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPubNetworkFlow}
         * @param pubNetworkFlow Property pubNetworkFlow: pub network flow.
         * @return {@code this}
         */
        public Builder pubNetworkFlow(com.aliyun.ros.cdk.core.IResolvable pubNetworkFlow) {
            this.pubNetworkFlow = pubNetworkFlow;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPubSlbSpecification}
         * @param pubSlbSpecification Property pubSlbSpecification:.
         * @return {@code this}
         */
        public Builder pubSlbSpecification(java.lang.String pubSlbSpecification) {
            this.pubSlbSpecification = pubSlbSpecification;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPubSlbSpecification}
         * @param pubSlbSpecification Property pubSlbSpecification:.
         * @return {@code this}
         */
        public Builder pubSlbSpecification(com.aliyun.ros.cdk.core.IResolvable pubSlbSpecification) {
            this.pubSlbSpecification = pubSlbSpecification;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getRequestPars}
         * @param requestPars Property requestPars:.
         * @return {@code this}
         */
        public Builder requestPars(java.lang.String requestPars) {
            this.requestPars = requestPars;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getRequestPars}
         * @param requestPars Property requestPars:.
         * @return {@code this}
         */
        public Builder requestPars(com.aliyun.ros.cdk.core.IResolvable requestPars) {
            this.requestPars = requestPars;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVpcId}
         * @param vpcId Property vpcId: vpc id.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVpcId}
         * @param vpcId Property vpcId: vpc id.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: switcher Id.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: switcher Id.
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
        private final java.lang.Object acceptLanguage;
        private final java.lang.Object aclEntryList;
        private final java.lang.Object clusterAliasName;
        private final java.lang.Object connectionType;
        private final java.lang.Object diskType;
        private final java.lang.Object mseVersion;
        private final java.lang.Object privateSlbSpecification;
        private final java.lang.Object pubNetworkFlow;
        private final java.lang.Object pubSlbSpecification;
        private final java.lang.Object requestPars;
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
            this.acceptLanguage = software.amazon.jsii.Kernel.get(this, "acceptLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aclEntryList = software.amazon.jsii.Kernel.get(this, "aclEntryList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterAliasName = software.amazon.jsii.Kernel.get(this, "clusterAliasName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionType = software.amazon.jsii.Kernel.get(this, "connectionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskType = software.amazon.jsii.Kernel.get(this, "diskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mseVersion = software.amazon.jsii.Kernel.get(this, "mseVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateSlbSpecification = software.amazon.jsii.Kernel.get(this, "privateSlbSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pubNetworkFlow = software.amazon.jsii.Kernel.get(this, "pubNetworkFlow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pubSlbSpecification = software.amazon.jsii.Kernel.get(this, "pubSlbSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.requestPars = software.amazon.jsii.Kernel.get(this, "requestPars", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterSpecification = java.util.Objects.requireNonNull(builder.clusterSpecification, "clusterSpecification is required");
            this.clusterType = java.util.Objects.requireNonNull(builder.clusterType, "clusterType is required");
            this.clusterVersion = java.util.Objects.requireNonNull(builder.clusterVersion, "clusterVersion is required");
            this.instanceCount = java.util.Objects.requireNonNull(builder.instanceCount, "instanceCount is required");
            this.netType = java.util.Objects.requireNonNull(builder.netType, "netType is required");
            this.acceptLanguage = builder.acceptLanguage;
            this.aclEntryList = builder.aclEntryList;
            this.clusterAliasName = builder.clusterAliasName;
            this.connectionType = builder.connectionType;
            this.diskType = builder.diskType;
            this.mseVersion = builder.mseVersion;
            this.privateSlbSpecification = builder.privateSlbSpecification;
            this.pubNetworkFlow = builder.pubNetworkFlow;
            this.pubSlbSpecification = builder.pubSlbSpecification;
            this.requestPars = builder.requestPars;
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
        public final java.lang.Object getAcceptLanguage() {
            return this.acceptLanguage;
        }

        @Override
        public final java.lang.Object getAclEntryList() {
            return this.aclEntryList;
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
        public final java.lang.Object getDiskType() {
            return this.diskType;
        }

        @Override
        public final java.lang.Object getMseVersion() {
            return this.mseVersion;
        }

        @Override
        public final java.lang.Object getPrivateSlbSpecification() {
            return this.privateSlbSpecification;
        }

        @Override
        public final java.lang.Object getPubNetworkFlow() {
            return this.pubNetworkFlow;
        }

        @Override
        public final java.lang.Object getPubSlbSpecification() {
            return this.pubSlbSpecification;
        }

        @Override
        public final java.lang.Object getRequestPars() {
            return this.requestPars;
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
            if (this.getAcceptLanguage() != null) {
                data.set("acceptLanguage", om.valueToTree(this.getAcceptLanguage()));
            }
            if (this.getAclEntryList() != null) {
                data.set("aclEntryList", om.valueToTree(this.getAclEntryList()));
            }
            if (this.getClusterAliasName() != null) {
                data.set("clusterAliasName", om.valueToTree(this.getClusterAliasName()));
            }
            if (this.getConnectionType() != null) {
                data.set("connectionType", om.valueToTree(this.getConnectionType()));
            }
            if (this.getDiskType() != null) {
                data.set("diskType", om.valueToTree(this.getDiskType()));
            }
            if (this.getMseVersion() != null) {
                data.set("mseVersion", om.valueToTree(this.getMseVersion()));
            }
            if (this.getPrivateSlbSpecification() != null) {
                data.set("privateSlbSpecification", om.valueToTree(this.getPrivateSlbSpecification()));
            }
            if (this.getPubNetworkFlow() != null) {
                data.set("pubNetworkFlow", om.valueToTree(this.getPubNetworkFlow()));
            }
            if (this.getPubSlbSpecification() != null) {
                data.set("pubSlbSpecification", om.valueToTree(this.getPubSlbSpecification()));
            }
            if (this.getRequestPars() != null) {
                data.set("requestPars", om.valueToTree(this.getRequestPars()));
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
            if (this.acceptLanguage != null ? !this.acceptLanguage.equals(that.acceptLanguage) : that.acceptLanguage != null) return false;
            if (this.aclEntryList != null ? !this.aclEntryList.equals(that.aclEntryList) : that.aclEntryList != null) return false;
            if (this.clusterAliasName != null ? !this.clusterAliasName.equals(that.clusterAliasName) : that.clusterAliasName != null) return false;
            if (this.connectionType != null ? !this.connectionType.equals(that.connectionType) : that.connectionType != null) return false;
            if (this.diskType != null ? !this.diskType.equals(that.diskType) : that.diskType != null) return false;
            if (this.mseVersion != null ? !this.mseVersion.equals(that.mseVersion) : that.mseVersion != null) return false;
            if (this.privateSlbSpecification != null ? !this.privateSlbSpecification.equals(that.privateSlbSpecification) : that.privateSlbSpecification != null) return false;
            if (this.pubNetworkFlow != null ? !this.pubNetworkFlow.equals(that.pubNetworkFlow) : that.pubNetworkFlow != null) return false;
            if (this.pubSlbSpecification != null ? !this.pubSlbSpecification.equals(that.pubSlbSpecification) : that.pubSlbSpecification != null) return false;
            if (this.requestPars != null ? !this.requestPars.equals(that.requestPars) : that.requestPars != null) return false;
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
            result = 31 * result + (this.acceptLanguage != null ? this.acceptLanguage.hashCode() : 0);
            result = 31 * result + (this.aclEntryList != null ? this.aclEntryList.hashCode() : 0);
            result = 31 * result + (this.clusterAliasName != null ? this.clusterAliasName.hashCode() : 0);
            result = 31 * result + (this.connectionType != null ? this.connectionType.hashCode() : 0);
            result = 31 * result + (this.diskType != null ? this.diskType.hashCode() : 0);
            result = 31 * result + (this.mseVersion != null ? this.mseVersion.hashCode() : 0);
            result = 31 * result + (this.privateSlbSpecification != null ? this.privateSlbSpecification.hashCode() : 0);
            result = 31 * result + (this.pubNetworkFlow != null ? this.pubNetworkFlow.hashCode() : 0);
            result = 31 * result + (this.pubSlbSpecification != null ? this.pubSlbSpecification.hashCode() : 0);
            result = 31 * result + (this.requestPars != null ? this.requestPars.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            return result;
        }
    }
}
