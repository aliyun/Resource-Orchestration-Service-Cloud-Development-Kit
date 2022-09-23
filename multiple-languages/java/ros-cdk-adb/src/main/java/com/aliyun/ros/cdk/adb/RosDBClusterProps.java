package com.aliyun.ros.cdk.adb;

/**
 * Properties for defining a `ALIYUN::ADB::DBCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:08.874Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adb.$Module.class, fqn = "@alicloud/ros-cdk-adb.RosDBClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosDBClusterProps.Jsii$Proxy.class)
public interface RosDBClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterCategory();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComputeResource() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterClass() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbNodeGroupCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbNodeStorage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getElasticIoResource() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExecutorCount() {
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
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.adb.RosDBCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
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
        java.lang.Object dbClusterCategory;
        java.lang.Object dbClusterVersion;
        java.lang.Object mode;
        java.lang.Object payType;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object computeResource;
        java.lang.Object dbClusterClass;
        java.lang.Object dbClusterDescription;
        java.lang.Object dbNodeGroupCount;
        java.lang.Object dbNodeStorage;
        java.lang.Object elasticIoResource;
        java.lang.Object executorCount;
        java.lang.Object period;
        java.lang.Object periodType;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.adb.RosDBCluster.TagsProperty> tags;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterCategory}
         * @param dbClusterCategory the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterCategory(java.lang.String dbClusterCategory) {
            this.dbClusterCategory = dbClusterCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterCategory}
         * @param dbClusterCategory the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterCategory(com.aliyun.ros.cdk.core.IResolvable dbClusterCategory) {
            this.dbClusterCategory = dbClusterCategory;
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
         * Sets the value of {@link RosDBClusterProps#getMode}
         * @param mode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder mode(java.lang.String mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getMode}
         * @param mode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder mode(com.aliyun.ros.cdk.core.IResolvable mode) {
            this.mode = mode;
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
         * Sets the value of {@link RosDBClusterProps#getComputeResource}
         * @param computeResource the value to be set.
         * @return {@code this}
         */
        public Builder computeResource(java.lang.String computeResource) {
            this.computeResource = computeResource;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getComputeResource}
         * @param computeResource the value to be set.
         * @return {@code this}
         */
        public Builder computeResource(com.aliyun.ros.cdk.core.IResolvable computeResource) {
            this.computeResource = computeResource;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterClass}
         * @param dbClusterClass the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterClass(java.lang.String dbClusterClass) {
            this.dbClusterClass = dbClusterClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterClass}
         * @param dbClusterClass the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterClass(com.aliyun.ros.cdk.core.IResolvable dbClusterClass) {
            this.dbClusterClass = dbClusterClass;
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
         * Sets the value of {@link RosDBClusterProps#getDbNodeGroupCount}
         * @param dbNodeGroupCount the value to be set.
         * @return {@code this}
         */
        public Builder dbNodeGroupCount(java.lang.Number dbNodeGroupCount) {
            this.dbNodeGroupCount = dbNodeGroupCount;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbNodeGroupCount}
         * @param dbNodeGroupCount the value to be set.
         * @return {@code this}
         */
        public Builder dbNodeGroupCount(com.aliyun.ros.cdk.core.IResolvable dbNodeGroupCount) {
            this.dbNodeGroupCount = dbNodeGroupCount;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbNodeStorage}
         * @param dbNodeStorage the value to be set.
         * @return {@code this}
         */
        public Builder dbNodeStorage(java.lang.Number dbNodeStorage) {
            this.dbNodeStorage = dbNodeStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbNodeStorage}
         * @param dbNodeStorage the value to be set.
         * @return {@code this}
         */
        public Builder dbNodeStorage(com.aliyun.ros.cdk.core.IResolvable dbNodeStorage) {
            this.dbNodeStorage = dbNodeStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getElasticIoResource}
         * @param elasticIoResource the value to be set.
         * @return {@code this}
         */
        public Builder elasticIoResource(java.lang.Number elasticIoResource) {
            this.elasticIoResource = elasticIoResource;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getElasticIoResource}
         * @param elasticIoResource the value to be set.
         * @return {@code this}
         */
        public Builder elasticIoResource(com.aliyun.ros.cdk.core.IResolvable elasticIoResource) {
            this.elasticIoResource = elasticIoResource;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getExecutorCount}
         * @param executorCount the value to be set.
         * @return {@code this}
         */
        public Builder executorCount(java.lang.Number executorCount) {
            this.executorCount = executorCount;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getExecutorCount}
         * @param executorCount the value to be set.
         * @return {@code this}
         */
        public Builder executorCount(com.aliyun.ros.cdk.core.IResolvable executorCount) {
            this.executorCount = executorCount;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
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
         * Sets the value of {@link RosDBClusterProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.adb.RosDBCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.adb.RosDBCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
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
        private final java.lang.Object dbClusterCategory;
        private final java.lang.Object dbClusterVersion;
        private final java.lang.Object mode;
        private final java.lang.Object payType;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object computeResource;
        private final java.lang.Object dbClusterClass;
        private final java.lang.Object dbClusterDescription;
        private final java.lang.Object dbNodeGroupCount;
        private final java.lang.Object dbNodeStorage;
        private final java.lang.Object elasticIoResource;
        private final java.lang.Object executorCount;
        private final java.lang.Object period;
        private final java.lang.Object periodType;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.adb.RosDBCluster.TagsProperty> tags;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbClusterCategory = software.amazon.jsii.Kernel.get(this, "dbClusterCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterVersion = software.amazon.jsii.Kernel.get(this, "dbClusterVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mode = software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.computeResource = software.amazon.jsii.Kernel.get(this, "computeResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterClass = software.amazon.jsii.Kernel.get(this, "dbClusterClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterDescription = software.amazon.jsii.Kernel.get(this, "dbClusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbNodeGroupCount = software.amazon.jsii.Kernel.get(this, "dbNodeGroupCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbNodeStorage = software.amazon.jsii.Kernel.get(this, "dbNodeStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.elasticIoResource = software.amazon.jsii.Kernel.get(this, "elasticIoResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.executorCount = software.amazon.jsii.Kernel.get(this, "executorCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodType = software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.adb.RosDBCluster.TagsProperty.class)));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbClusterCategory = java.util.Objects.requireNonNull(builder.dbClusterCategory, "dbClusterCategory is required");
            this.dbClusterVersion = java.util.Objects.requireNonNull(builder.dbClusterVersion, "dbClusterVersion is required");
            this.mode = java.util.Objects.requireNonNull(builder.mode, "mode is required");
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.computeResource = builder.computeResource;
            this.dbClusterClass = builder.dbClusterClass;
            this.dbClusterDescription = builder.dbClusterDescription;
            this.dbNodeGroupCount = builder.dbNodeGroupCount;
            this.dbNodeStorage = builder.dbNodeStorage;
            this.elasticIoResource = builder.elasticIoResource;
            this.executorCount = builder.executorCount;
            this.period = builder.period;
            this.periodType = builder.periodType;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.adb.RosDBCluster.TagsProperty>)builder.tags;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getDbClusterCategory() {
            return this.dbClusterCategory;
        }

        @Override
        public final java.lang.Object getDbClusterVersion() {
            return this.dbClusterVersion;
        }

        @Override
        public final java.lang.Object getMode() {
            return this.mode;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
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
        public final java.lang.Object getComputeResource() {
            return this.computeResource;
        }

        @Override
        public final java.lang.Object getDbClusterClass() {
            return this.dbClusterClass;
        }

        @Override
        public final java.lang.Object getDbClusterDescription() {
            return this.dbClusterDescription;
        }

        @Override
        public final java.lang.Object getDbNodeGroupCount() {
            return this.dbNodeGroupCount;
        }

        @Override
        public final java.lang.Object getDbNodeStorage() {
            return this.dbNodeStorage;
        }

        @Override
        public final java.lang.Object getElasticIoResource() {
            return this.elasticIoResource;
        }

        @Override
        public final java.lang.Object getExecutorCount() {
            return this.executorCount;
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
        public final java.util.List<com.aliyun.ros.cdk.adb.RosDBCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbClusterCategory", om.valueToTree(this.getDbClusterCategory()));
            data.set("dbClusterVersion", om.valueToTree(this.getDbClusterVersion()));
            data.set("mode", om.valueToTree(this.getMode()));
            data.set("payType", om.valueToTree(this.getPayType()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getComputeResource() != null) {
                data.set("computeResource", om.valueToTree(this.getComputeResource()));
            }
            if (this.getDbClusterClass() != null) {
                data.set("dbClusterClass", om.valueToTree(this.getDbClusterClass()));
            }
            if (this.getDbClusterDescription() != null) {
                data.set("dbClusterDescription", om.valueToTree(this.getDbClusterDescription()));
            }
            if (this.getDbNodeGroupCount() != null) {
                data.set("dbNodeGroupCount", om.valueToTree(this.getDbNodeGroupCount()));
            }
            if (this.getDbNodeStorage() != null) {
                data.set("dbNodeStorage", om.valueToTree(this.getDbNodeStorage()));
            }
            if (this.getElasticIoResource() != null) {
                data.set("elasticIoResource", om.valueToTree(this.getElasticIoResource()));
            }
            if (this.getExecutorCount() != null) {
                data.set("executorCount", om.valueToTree(this.getExecutorCount()));
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
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-adb.RosDBClusterProps"));
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

            if (!dbClusterCategory.equals(that.dbClusterCategory)) return false;
            if (!dbClusterVersion.equals(that.dbClusterVersion)) return false;
            if (!mode.equals(that.mode)) return false;
            if (!payType.equals(that.payType)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.computeResource != null ? !this.computeResource.equals(that.computeResource) : that.computeResource != null) return false;
            if (this.dbClusterClass != null ? !this.dbClusterClass.equals(that.dbClusterClass) : that.dbClusterClass != null) return false;
            if (this.dbClusterDescription != null ? !this.dbClusterDescription.equals(that.dbClusterDescription) : that.dbClusterDescription != null) return false;
            if (this.dbNodeGroupCount != null ? !this.dbNodeGroupCount.equals(that.dbNodeGroupCount) : that.dbNodeGroupCount != null) return false;
            if (this.dbNodeStorage != null ? !this.dbNodeStorage.equals(that.dbNodeStorage) : that.dbNodeStorage != null) return false;
            if (this.elasticIoResource != null ? !this.elasticIoResource.equals(that.elasticIoResource) : that.elasticIoResource != null) return false;
            if (this.executorCount != null ? !this.executorCount.equals(that.executorCount) : that.executorCount != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodType != null ? !this.periodType.equals(that.periodType) : that.periodType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbClusterCategory.hashCode();
            result = 31 * result + (this.dbClusterVersion.hashCode());
            result = 31 * result + (this.mode.hashCode());
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.computeResource != null ? this.computeResource.hashCode() : 0);
            result = 31 * result + (this.dbClusterClass != null ? this.dbClusterClass.hashCode() : 0);
            result = 31 * result + (this.dbClusterDescription != null ? this.dbClusterDescription.hashCode() : 0);
            result = 31 * result + (this.dbNodeGroupCount != null ? this.dbNodeGroupCount.hashCode() : 0);
            result = 31 * result + (this.dbNodeStorage != null ? this.dbNodeStorage.hashCode() : 0);
            result = 31 * result + (this.elasticIoResource != null ? this.elasticIoResource.hashCode() : 0);
            result = 31 * result + (this.executorCount != null ? this.executorCount.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodType != null ? this.periodType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
