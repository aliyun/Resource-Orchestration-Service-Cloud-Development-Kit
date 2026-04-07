package com.aliyun.ros.cdk.clickhouse;

/**
 * Properties for defining a <code>RosEnterpriseDBCluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbcluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:22.633Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.clickhouse.$Module.class, fqn = "@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosEnterpriseDBClusterProps.Jsii$Proxy.class)
public interface RosEnterpriseDBClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngine();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNodeCount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNodeScaleMax();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNodeScaleMin();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupSetId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbTimeZone() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeploySchema() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiZone() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPublicConnectionSetting() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceDbInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageQuota() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosEnterpriseDBClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosEnterpriseDBClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosEnterpriseDBClusterProps> {
        java.lang.Object engine;
        java.lang.Object nodeCount;
        java.lang.Object nodeScaleMax;
        java.lang.Object nodeScaleMin;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;
        java.lang.Object backupSetId;
        java.lang.Object dbInstanceDescription;
        java.lang.Object dbTimeZone;
        java.lang.Object deploySchema;
        java.lang.Object multiZone;
        java.lang.Object publicConnectionSetting;
        java.lang.Object resourceGroupId;
        java.lang.Object sourceDbInstanceId;
        java.lang.Object storageQuota;
        java.lang.Object storageType;
        java.util.List<com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.TagsProperty> tags;

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getEngine}
         * @param engine the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getEngine}
         * @param engine the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getNodeCount}
         * @param nodeCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeCount(java.lang.Number nodeCount) {
            this.nodeCount = nodeCount;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getNodeCount}
         * @param nodeCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeCount(com.aliyun.ros.cdk.core.IResolvable nodeCount) {
            this.nodeCount = nodeCount;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getNodeScaleMax}
         * @param nodeScaleMax the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeScaleMax(java.lang.Number nodeScaleMax) {
            this.nodeScaleMax = nodeScaleMax;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getNodeScaleMax}
         * @param nodeScaleMax the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeScaleMax(com.aliyun.ros.cdk.core.IResolvable nodeScaleMax) {
            this.nodeScaleMax = nodeScaleMax;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getNodeScaleMin}
         * @param nodeScaleMin the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeScaleMin(java.lang.Number nodeScaleMin) {
            this.nodeScaleMin = nodeScaleMin;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getNodeScaleMin}
         * @param nodeScaleMin the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeScaleMin(com.aliyun.ros.cdk.core.IResolvable nodeScaleMin) {
            this.nodeScaleMin = nodeScaleMin;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getBackupSetId}
         * @param backupSetId the value to be set.
         * @return {@code this}
         */
        public Builder backupSetId(java.lang.String backupSetId) {
            this.backupSetId = backupSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getBackupSetId}
         * @param backupSetId the value to be set.
         * @return {@code this}
         */
        public Builder backupSetId(com.aliyun.ros.cdk.core.IResolvable backupSetId) {
            this.backupSetId = backupSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getDbInstanceDescription}
         * @param dbInstanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getDbInstanceDescription}
         * @param dbInstanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getDbTimeZone}
         * @param dbTimeZone the value to be set.
         * @return {@code this}
         */
        public Builder dbTimeZone(java.lang.String dbTimeZone) {
            this.dbTimeZone = dbTimeZone;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getDbTimeZone}
         * @param dbTimeZone the value to be set.
         * @return {@code this}
         */
        public Builder dbTimeZone(com.aliyun.ros.cdk.core.IResolvable dbTimeZone) {
            this.dbTimeZone = dbTimeZone;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getDeploySchema}
         * @param deploySchema the value to be set.
         * @return {@code this}
         */
        public Builder deploySchema(java.lang.String deploySchema) {
            this.deploySchema = deploySchema;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getDeploySchema}
         * @param deploySchema the value to be set.
         * @return {@code this}
         */
        public Builder deploySchema(com.aliyun.ros.cdk.core.IResolvable deploySchema) {
            this.deploySchema = deploySchema;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getMultiZone}
         * @param multiZone the value to be set.
         * @return {@code this}
         */
        public Builder multiZone(com.aliyun.ros.cdk.core.IResolvable multiZone) {
            this.multiZone = multiZone;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getMultiZone}
         * @param multiZone the value to be set.
         * @return {@code this}
         */
        public Builder multiZone(java.util.List<? extends java.lang.Object> multiZone) {
            this.multiZone = multiZone;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getPublicConnectionSetting}
         * @param publicConnectionSetting the value to be set.
         * @return {@code this}
         */
        public Builder publicConnectionSetting(com.aliyun.ros.cdk.core.IResolvable publicConnectionSetting) {
            this.publicConnectionSetting = publicConnectionSetting;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getPublicConnectionSetting}
         * @param publicConnectionSetting the value to be set.
         * @return {@code this}
         */
        public Builder publicConnectionSetting(com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.PublicConnectionSettingProperty publicConnectionSetting) {
            this.publicConnectionSetting = publicConnectionSetting;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getSourceDbInstanceId}
         * @param sourceDbInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder sourceDbInstanceId(java.lang.String sourceDbInstanceId) {
            this.sourceDbInstanceId = sourceDbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getSourceDbInstanceId}
         * @param sourceDbInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder sourceDbInstanceId(com.aliyun.ros.cdk.core.IResolvable sourceDbInstanceId) {
            this.sourceDbInstanceId = sourceDbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getStorageQuota}
         * @param storageQuota the value to be set.
         * @return {@code this}
         */
        public Builder storageQuota(java.lang.Number storageQuota) {
            this.storageQuota = storageQuota;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getStorageQuota}
         * @param storageQuota the value to be set.
         * @return {@code this}
         */
        public Builder storageQuota(com.aliyun.ros.cdk.core.IResolvable storageQuota) {
            this.storageQuota = storageQuota;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getStorageType}
         * @param storageType the value to be set.
         * @return {@code this}
         */
        public Builder storageType(java.lang.String storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getStorageType}
         * @param storageType the value to be set.
         * @return {@code this}
         */
        public Builder storageType(com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link RosEnterpriseDBClusterProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosEnterpriseDBClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosEnterpriseDBClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosEnterpriseDBClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosEnterpriseDBClusterProps {
        private final java.lang.Object engine;
        private final java.lang.Object nodeCount;
        private final java.lang.Object nodeScaleMax;
        private final java.lang.Object nodeScaleMin;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;
        private final java.lang.Object backupSetId;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object dbTimeZone;
        private final java.lang.Object deploySchema;
        private final java.lang.Object multiZone;
        private final java.lang.Object publicConnectionSetting;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object sourceDbInstanceId;
        private final java.lang.Object storageQuota;
        private final java.lang.Object storageType;
        private final java.util.List<com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeCount = software.amazon.jsii.Kernel.get(this, "nodeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeScaleMax = software.amazon.jsii.Kernel.get(this, "nodeScaleMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeScaleMin = software.amazon.jsii.Kernel.get(this, "nodeScaleMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupSetId = software.amazon.jsii.Kernel.get(this, "backupSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbTimeZone = software.amazon.jsii.Kernel.get(this, "dbTimeZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deploySchema = software.amazon.jsii.Kernel.get(this, "deploySchema", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiZone = software.amazon.jsii.Kernel.get(this, "multiZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.publicConnectionSetting = software.amazon.jsii.Kernel.get(this, "publicConnectionSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceDbInstanceId = software.amazon.jsii.Kernel.get(this, "sourceDbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageQuota = software.amazon.jsii.Kernel.get(this, "storageQuota", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageType = software.amazon.jsii.Kernel.get(this, "storageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.engine = java.util.Objects.requireNonNull(builder.engine, "engine is required");
            this.nodeCount = java.util.Objects.requireNonNull(builder.nodeCount, "nodeCount is required");
            this.nodeScaleMax = java.util.Objects.requireNonNull(builder.nodeScaleMax, "nodeScaleMax is required");
            this.nodeScaleMin = java.util.Objects.requireNonNull(builder.nodeScaleMin, "nodeScaleMin is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.backupSetId = builder.backupSetId;
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.dbTimeZone = builder.dbTimeZone;
            this.deploySchema = builder.deploySchema;
            this.multiZone = builder.multiZone;
            this.publicConnectionSetting = builder.publicConnectionSetting;
            this.resourceGroupId = builder.resourceGroupId;
            this.sourceDbInstanceId = builder.sourceDbInstanceId;
            this.storageQuota = builder.storageQuota;
            this.storageType = builder.storageType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getEngine() {
            return this.engine;
        }

        @Override
        public final java.lang.Object getNodeCount() {
            return this.nodeCount;
        }

        @Override
        public final java.lang.Object getNodeScaleMax() {
            return this.nodeScaleMax;
        }

        @Override
        public final java.lang.Object getNodeScaleMin() {
            return this.nodeScaleMin;
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
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getBackupSetId() {
            return this.backupSetId;
        }

        @Override
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.Object getDbTimeZone() {
            return this.dbTimeZone;
        }

        @Override
        public final java.lang.Object getDeploySchema() {
            return this.deploySchema;
        }

        @Override
        public final java.lang.Object getMultiZone() {
            return this.multiZone;
        }

        @Override
        public final java.lang.Object getPublicConnectionSetting() {
            return this.publicConnectionSetting;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSourceDbInstanceId() {
            return this.sourceDbInstanceId;
        }

        @Override
        public final java.lang.Object getStorageQuota() {
            return this.storageQuota;
        }

        @Override
        public final java.lang.Object getStorageType() {
            return this.storageType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.clickhouse.RosEnterpriseDBCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("engine", om.valueToTree(this.getEngine()));
            data.set("nodeCount", om.valueToTree(this.getNodeCount()));
            data.set("nodeScaleMax", om.valueToTree(this.getNodeScaleMax()));
            data.set("nodeScaleMin", om.valueToTree(this.getNodeScaleMin()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getBackupSetId() != null) {
                data.set("backupSetId", om.valueToTree(this.getBackupSetId()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getDbTimeZone() != null) {
                data.set("dbTimeZone", om.valueToTree(this.getDbTimeZone()));
            }
            if (this.getDeploySchema() != null) {
                data.set("deploySchema", om.valueToTree(this.getDeploySchema()));
            }
            if (this.getMultiZone() != null) {
                data.set("multiZone", om.valueToTree(this.getMultiZone()));
            }
            if (this.getPublicConnectionSetting() != null) {
                data.set("publicConnectionSetting", om.valueToTree(this.getPublicConnectionSetting()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSourceDbInstanceId() != null) {
                data.set("sourceDbInstanceId", om.valueToTree(this.getSourceDbInstanceId()));
            }
            if (this.getStorageQuota() != null) {
                data.set("storageQuota", om.valueToTree(this.getStorageQuota()));
            }
            if (this.getStorageType() != null) {
                data.set("storageType", om.valueToTree(this.getStorageType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosEnterpriseDBClusterProps.Jsii$Proxy that = (RosEnterpriseDBClusterProps.Jsii$Proxy) o;

            if (!engine.equals(that.engine)) return false;
            if (!nodeCount.equals(that.nodeCount)) return false;
            if (!nodeScaleMax.equals(that.nodeScaleMax)) return false;
            if (!nodeScaleMin.equals(that.nodeScaleMin)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.backupSetId != null ? !this.backupSetId.equals(that.backupSetId) : that.backupSetId != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.dbTimeZone != null ? !this.dbTimeZone.equals(that.dbTimeZone) : that.dbTimeZone != null) return false;
            if (this.deploySchema != null ? !this.deploySchema.equals(that.deploySchema) : that.deploySchema != null) return false;
            if (this.multiZone != null ? !this.multiZone.equals(that.multiZone) : that.multiZone != null) return false;
            if (this.publicConnectionSetting != null ? !this.publicConnectionSetting.equals(that.publicConnectionSetting) : that.publicConnectionSetting != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.sourceDbInstanceId != null ? !this.sourceDbInstanceId.equals(that.sourceDbInstanceId) : that.sourceDbInstanceId != null) return false;
            if (this.storageQuota != null ? !this.storageQuota.equals(that.storageQuota) : that.storageQuota != null) return false;
            if (this.storageType != null ? !this.storageType.equals(that.storageType) : that.storageType != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.engine.hashCode();
            result = 31 * result + (this.nodeCount.hashCode());
            result = 31 * result + (this.nodeScaleMax.hashCode());
            result = 31 * result + (this.nodeScaleMin.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.backupSetId != null ? this.backupSetId.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.dbTimeZone != null ? this.dbTimeZone.hashCode() : 0);
            result = 31 * result + (this.deploySchema != null ? this.deploySchema.hashCode() : 0);
            result = 31 * result + (this.multiZone != null ? this.multiZone.hashCode() : 0);
            result = 31 * result + (this.publicConnectionSetting != null ? this.publicConnectionSetting.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.sourceDbInstanceId != null ? this.sourceDbInstanceId.hashCode() : 0);
            result = 31 * result + (this.storageQuota != null ? this.storageQuota.hashCode() : 0);
            result = 31 * result + (this.storageType != null ? this.storageType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
