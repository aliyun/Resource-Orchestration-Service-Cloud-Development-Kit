package com.aliyun.ros.cdk.adblake;

/**
 * Properties for defining a <code>RosDBCluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:49.436Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adblake.$Module.class, fqn = "@alicloud/ros-cdk-adblake.RosDBClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosDBClusterProps.Jsii$Proxy.class)
public interface RosDBClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getComputeResource();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStorageResource();

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableDefaultResourcePool() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestoreToTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestoreType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceDbClusterId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDBClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBClusterProps> {
        java.lang.Object computeResource;
        java.lang.Object dbClusterVersion;
        java.lang.Object payType;
        java.lang.Object storageResource;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;
        java.lang.Object backupSetId;
        java.lang.Object dbClusterDescription;
        java.lang.Object enableDefaultResourcePool;
        java.lang.Object period;
        java.lang.Object periodType;
        java.lang.Object resourceGroupId;
        java.lang.Object restoreToTime;
        java.lang.Object restoreType;
        java.lang.Object sourceDbClusterId;
        java.util.List<com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty> tags;

        /**
         * Sets the value of {@link RosDBClusterProps#getComputeResource}
         * @param computeResource the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder computeResource(java.lang.String computeResource) {
            this.computeResource = computeResource;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getComputeResource}
         * @param computeResource the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder computeResource(com.aliyun.ros.cdk.core.IResolvable computeResource) {
            this.computeResource = computeResource;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterVersion}
         * @param dbClusterVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterVersion(java.lang.String dbClusterVersion) {
            this.dbClusterVersion = dbClusterVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterVersion}
         * @param dbClusterVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterVersion(com.aliyun.ros.cdk.core.IResolvable dbClusterVersion) {
            this.dbClusterVersion = dbClusterVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStorageResource}
         * @param storageResource the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder storageResource(java.lang.String storageResource) {
            this.storageResource = storageResource;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStorageResource}
         * @param storageResource the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder storageResource(com.aliyun.ros.cdk.core.IResolvable storageResource) {
            this.storageResource = storageResource;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getBackupSetId}
         * @param backupSetId the value to be set.
         * @return {@code this}
         */
        public Builder backupSetId(java.lang.String backupSetId) {
            this.backupSetId = backupSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getBackupSetId}
         * @param backupSetId the value to be set.
         * @return {@code this}
         */
        public Builder backupSetId(com.aliyun.ros.cdk.core.IResolvable backupSetId) {
            this.backupSetId = backupSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterDescription}
         * @param dbClusterDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterDescription(java.lang.String dbClusterDescription) {
            this.dbClusterDescription = dbClusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterDescription}
         * @param dbClusterDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterDescription(com.aliyun.ros.cdk.core.IResolvable dbClusterDescription) {
            this.dbClusterDescription = dbClusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getEnableDefaultResourcePool}
         * @param enableDefaultResourcePool the value to be set.
         * @return {@code this}
         */
        public Builder enableDefaultResourcePool(java.lang.Boolean enableDefaultResourcePool) {
            this.enableDefaultResourcePool = enableDefaultResourcePool;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getEnableDefaultResourcePool}
         * @param enableDefaultResourcePool the value to be set.
         * @return {@code this}
         */
        public Builder enableDefaultResourcePool(com.aliyun.ros.cdk.core.IResolvable enableDefaultResourcePool) {
            this.enableDefaultResourcePool = enableDefaultResourcePool;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.String period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPeriodType}
         * @param periodType the value to be set.
         * @return {@code this}
         */
        public Builder periodType(java.lang.String periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPeriodType}
         * @param periodType the value to be set.
         * @return {@code this}
         */
        public Builder periodType(com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getRestoreToTime}
         * @param restoreToTime the value to be set.
         * @return {@code this}
         */
        public Builder restoreToTime(java.lang.String restoreToTime) {
            this.restoreToTime = restoreToTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getRestoreToTime}
         * @param restoreToTime the value to be set.
         * @return {@code this}
         */
        public Builder restoreToTime(com.aliyun.ros.cdk.core.IResolvable restoreToTime) {
            this.restoreToTime = restoreToTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getRestoreType}
         * @param restoreType the value to be set.
         * @return {@code this}
         */
        public Builder restoreType(java.lang.String restoreType) {
            this.restoreType = restoreType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getRestoreType}
         * @param restoreType the value to be set.
         * @return {@code this}
         */
        public Builder restoreType(com.aliyun.ros.cdk.core.IResolvable restoreType) {
            this.restoreType = restoreType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getSourceDbClusterId}
         * @param sourceDbClusterId the value to be set.
         * @return {@code this}
         */
        public Builder sourceDbClusterId(java.lang.String sourceDbClusterId) {
            this.sourceDbClusterId = sourceDbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getSourceDbClusterId}
         * @param sourceDbClusterId the value to be set.
         * @return {@code this}
         */
        public Builder sourceDbClusterId(com.aliyun.ros.cdk.core.IResolvable sourceDbClusterId) {
            this.sourceDbClusterId = sourceDbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBClusterProps {
        private final java.lang.Object computeResource;
        private final java.lang.Object dbClusterVersion;
        private final java.lang.Object payType;
        private final java.lang.Object storageResource;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;
        private final java.lang.Object backupSetId;
        private final java.lang.Object dbClusterDescription;
        private final java.lang.Object enableDefaultResourcePool;
        private final java.lang.Object period;
        private final java.lang.Object periodType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object restoreToTime;
        private final java.lang.Object restoreType;
        private final java.lang.Object sourceDbClusterId;
        private final java.util.List<com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.computeResource = software.amazon.jsii.Kernel.get(this, "computeResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterVersion = software.amazon.jsii.Kernel.get(this, "dbClusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageResource = software.amazon.jsii.Kernel.get(this, "storageResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupSetId = software.amazon.jsii.Kernel.get(this, "backupSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterDescription = software.amazon.jsii.Kernel.get(this, "dbClusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableDefaultResourcePool = software.amazon.jsii.Kernel.get(this, "enableDefaultResourcePool", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodType = software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restoreToTime = software.amazon.jsii.Kernel.get(this, "restoreToTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restoreType = software.amazon.jsii.Kernel.get(this, "restoreType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceDbClusterId = software.amazon.jsii.Kernel.get(this, "sourceDbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.computeResource = java.util.Objects.requireNonNull(builder.computeResource, "computeResource is required");
            this.dbClusterVersion = java.util.Objects.requireNonNull(builder.dbClusterVersion, "dbClusterVersion is required");
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.storageResource = java.util.Objects.requireNonNull(builder.storageResource, "storageResource is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.backupSetId = builder.backupSetId;
            this.dbClusterDescription = builder.dbClusterDescription;
            this.enableDefaultResourcePool = builder.enableDefaultResourcePool;
            this.period = builder.period;
            this.periodType = builder.periodType;
            this.resourceGroupId = builder.resourceGroupId;
            this.restoreToTime = builder.restoreToTime;
            this.restoreType = builder.restoreType;
            this.sourceDbClusterId = builder.sourceDbClusterId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getComputeResource() {
            return this.computeResource;
        }

        @Override
        public final java.lang.Object getDbClusterVersion() {
            return this.dbClusterVersion;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getStorageResource() {
            return this.storageResource;
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
        public final java.lang.Object getDbClusterDescription() {
            return this.dbClusterDescription;
        }

        @Override
        public final java.lang.Object getEnableDefaultResourcePool() {
            return this.enableDefaultResourcePool;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodType() {
            return this.periodType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRestoreToTime() {
            return this.restoreToTime;
        }

        @Override
        public final java.lang.Object getRestoreType() {
            return this.restoreType;
        }

        @Override
        public final java.lang.Object getSourceDbClusterId() {
            return this.sourceDbClusterId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.adblake.RosDBCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("computeResource", om.valueToTree(this.getComputeResource()));
            data.set("dbClusterVersion", om.valueToTree(this.getDbClusterVersion()));
            data.set("payType", om.valueToTree(this.getPayType()));
            data.set("storageResource", om.valueToTree(this.getStorageResource()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getBackupSetId() != null) {
                data.set("backupSetId", om.valueToTree(this.getBackupSetId()));
            }
            if (this.getDbClusterDescription() != null) {
                data.set("dbClusterDescription", om.valueToTree(this.getDbClusterDescription()));
            }
            if (this.getEnableDefaultResourcePool() != null) {
                data.set("enableDefaultResourcePool", om.valueToTree(this.getEnableDefaultResourcePool()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodType() != null) {
                data.set("periodType", om.valueToTree(this.getPeriodType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRestoreToTime() != null) {
                data.set("restoreToTime", om.valueToTree(this.getRestoreToTime()));
            }
            if (this.getRestoreType() != null) {
                data.set("restoreType", om.valueToTree(this.getRestoreType()));
            }
            if (this.getSourceDbClusterId() != null) {
                data.set("sourceDbClusterId", om.valueToTree(this.getSourceDbClusterId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-adblake.RosDBClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBClusterProps.Jsii$Proxy that = (RosDBClusterProps.Jsii$Proxy) o;

            if (!computeResource.equals(that.computeResource)) return false;
            if (!dbClusterVersion.equals(that.dbClusterVersion)) return false;
            if (!payType.equals(that.payType)) return false;
            if (!storageResource.equals(that.storageResource)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.backupSetId != null ? !this.backupSetId.equals(that.backupSetId) : that.backupSetId != null) return false;
            if (this.dbClusterDescription != null ? !this.dbClusterDescription.equals(that.dbClusterDescription) : that.dbClusterDescription != null) return false;
            if (this.enableDefaultResourcePool != null ? !this.enableDefaultResourcePool.equals(that.enableDefaultResourcePool) : that.enableDefaultResourcePool != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodType != null ? !this.periodType.equals(that.periodType) : that.periodType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.restoreToTime != null ? !this.restoreToTime.equals(that.restoreToTime) : that.restoreToTime != null) return false;
            if (this.restoreType != null ? !this.restoreType.equals(that.restoreType) : that.restoreType != null) return false;
            if (this.sourceDbClusterId != null ? !this.sourceDbClusterId.equals(that.sourceDbClusterId) : that.sourceDbClusterId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.computeResource.hashCode();
            result = 31 * result + (this.dbClusterVersion.hashCode());
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.storageResource.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.backupSetId != null ? this.backupSetId.hashCode() : 0);
            result = 31 * result + (this.dbClusterDescription != null ? this.dbClusterDescription.hashCode() : 0);
            result = 31 * result + (this.enableDefaultResourcePool != null ? this.enableDefaultResourcePool.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodType != null ? this.periodType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.restoreToTime != null ? this.restoreToTime.hashCode() : 0);
            result = 31 * result + (this.restoreType != null ? this.restoreType.hashCode() : 0);
            result = 31 * result + (this.sourceDbClusterId != null ? this.sourceDbClusterId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
