package com.aliyun.ros.cdk.adblake;

/**
 * Properties for defining a <code>RosResourceGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-resourcegroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:51.975Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.adblake.$Module.class, fqn = "@alicloud/ros-cdk-adblake.RosResourceGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosResourceGroupProps.Jsii$Proxy.class)
public interface RosResourceGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngine();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoStopInterval() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterSizeResource() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSpot() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEngineParams() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxClusterCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxComputeResource() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinClusterCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMinComputeResource() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRules() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosResourceGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosResourceGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosResourceGroupProps> {
        java.lang.Object dbClusterId;
        java.lang.Object engine;
        java.lang.Object groupName;
        java.lang.Object groupType;
        java.lang.Object autoStopInterval;
        java.lang.Object clusterMode;
        java.lang.Object clusterSizeResource;
        java.lang.Object enableSpot;
        java.lang.Object engineParams;
        java.lang.Object maxClusterCount;
        java.lang.Object maxComputeResource;
        java.lang.Object minClusterCount;
        java.lang.Object minComputeResource;
        java.lang.Object rules;

        /**
         * Sets the value of {@link RosResourceGroupProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getEngine}
         * @param engine the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getEngine}
         * @param engine the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getGroupName}
         * @param groupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getGroupName}
         * @param groupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getGroupType}
         * @param groupType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupType(java.lang.String groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getGroupType}
         * @param groupType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupType(com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.groupType = groupType;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getAutoStopInterval}
         * @param autoStopInterval the value to be set.
         * @return {@code this}
         */
        public Builder autoStopInterval(java.lang.String autoStopInterval) {
            this.autoStopInterval = autoStopInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getAutoStopInterval}
         * @param autoStopInterval the value to be set.
         * @return {@code this}
         */
        public Builder autoStopInterval(com.aliyun.ros.cdk.core.IResolvable autoStopInterval) {
            this.autoStopInterval = autoStopInterval;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getClusterMode}
         * @param clusterMode the value to be set.
         * @return {@code this}
         */
        public Builder clusterMode(java.lang.String clusterMode) {
            this.clusterMode = clusterMode;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getClusterMode}
         * @param clusterMode the value to be set.
         * @return {@code this}
         */
        public Builder clusterMode(com.aliyun.ros.cdk.core.IResolvable clusterMode) {
            this.clusterMode = clusterMode;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getClusterSizeResource}
         * @param clusterSizeResource the value to be set.
         * @return {@code this}
         */
        public Builder clusterSizeResource(java.lang.String clusterSizeResource) {
            this.clusterSizeResource = clusterSizeResource;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getClusterSizeResource}
         * @param clusterSizeResource the value to be set.
         * @return {@code this}
         */
        public Builder clusterSizeResource(com.aliyun.ros.cdk.core.IResolvable clusterSizeResource) {
            this.clusterSizeResource = clusterSizeResource;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getEnableSpot}
         * @param enableSpot the value to be set.
         * @return {@code this}
         */
        public Builder enableSpot(java.lang.Boolean enableSpot) {
            this.enableSpot = enableSpot;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getEnableSpot}
         * @param enableSpot the value to be set.
         * @return {@code this}
         */
        public Builder enableSpot(com.aliyun.ros.cdk.core.IResolvable enableSpot) {
            this.enableSpot = enableSpot;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getEngineParams}
         * @param engineParams the value to be set.
         * @return {@code this}
         */
        public Builder engineParams(com.aliyun.ros.cdk.core.IResolvable engineParams) {
            this.engineParams = engineParams;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getEngineParams}
         * @param engineParams the value to be set.
         * @return {@code this}
         */
        public Builder engineParams(java.util.Map<java.lang.String, ? extends java.lang.Object> engineParams) {
            this.engineParams = engineParams;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getMaxClusterCount}
         * @param maxClusterCount the value to be set.
         * @return {@code this}
         */
        public Builder maxClusterCount(java.lang.Number maxClusterCount) {
            this.maxClusterCount = maxClusterCount;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getMaxClusterCount}
         * @param maxClusterCount the value to be set.
         * @return {@code this}
         */
        public Builder maxClusterCount(com.aliyun.ros.cdk.core.IResolvable maxClusterCount) {
            this.maxClusterCount = maxClusterCount;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getMaxComputeResource}
         * @param maxComputeResource the value to be set.
         * @return {@code this}
         */
        public Builder maxComputeResource(java.lang.String maxComputeResource) {
            this.maxComputeResource = maxComputeResource;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getMaxComputeResource}
         * @param maxComputeResource the value to be set.
         * @return {@code this}
         */
        public Builder maxComputeResource(com.aliyun.ros.cdk.core.IResolvable maxComputeResource) {
            this.maxComputeResource = maxComputeResource;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getMinClusterCount}
         * @param minClusterCount the value to be set.
         * @return {@code this}
         */
        public Builder minClusterCount(java.lang.Number minClusterCount) {
            this.minClusterCount = minClusterCount;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getMinClusterCount}
         * @param minClusterCount the value to be set.
         * @return {@code this}
         */
        public Builder minClusterCount(com.aliyun.ros.cdk.core.IResolvable minClusterCount) {
            this.minClusterCount = minClusterCount;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getMinComputeResource}
         * @param minComputeResource the value to be set.
         * @return {@code this}
         */
        public Builder minComputeResource(java.lang.String minComputeResource) {
            this.minComputeResource = minComputeResource;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getMinComputeResource}
         * @param minComputeResource the value to be set.
         * @return {@code this}
         */
        public Builder minComputeResource(com.aliyun.ros.cdk.core.IResolvable minComputeResource) {
            this.minComputeResource = minComputeResource;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getRules}
         * @param rules the value to be set.
         * @return {@code this}
         */
        public Builder rules(com.aliyun.ros.cdk.core.IResolvable rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupProps#getRules}
         * @param rules the value to be set.
         * @return {@code this}
         */
        public Builder rules(java.util.List<? extends java.lang.Object> rules) {
            this.rules = rules;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosResourceGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosResourceGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosResourceGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosResourceGroupProps {
        private final java.lang.Object dbClusterId;
        private final java.lang.Object engine;
        private final java.lang.Object groupName;
        private final java.lang.Object groupType;
        private final java.lang.Object autoStopInterval;
        private final java.lang.Object clusterMode;
        private final java.lang.Object clusterSizeResource;
        private final java.lang.Object enableSpot;
        private final java.lang.Object engineParams;
        private final java.lang.Object maxClusterCount;
        private final java.lang.Object maxComputeResource;
        private final java.lang.Object minClusterCount;
        private final java.lang.Object minComputeResource;
        private final java.lang.Object rules;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupType = software.amazon.jsii.Kernel.get(this, "groupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoStopInterval = software.amazon.jsii.Kernel.get(this, "autoStopInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterMode = software.amazon.jsii.Kernel.get(this, "clusterMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterSizeResource = software.amazon.jsii.Kernel.get(this, "clusterSizeResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableSpot = software.amazon.jsii.Kernel.get(this, "enableSpot", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineParams = software.amazon.jsii.Kernel.get(this, "engineParams", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxClusterCount = software.amazon.jsii.Kernel.get(this, "maxClusterCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxComputeResource = software.amazon.jsii.Kernel.get(this, "maxComputeResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minClusterCount = software.amazon.jsii.Kernel.get(this, "minClusterCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.minComputeResource = software.amazon.jsii.Kernel.get(this, "minComputeResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rules = software.amazon.jsii.Kernel.get(this, "rules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.engine = java.util.Objects.requireNonNull(builder.engine, "engine is required");
            this.groupName = java.util.Objects.requireNonNull(builder.groupName, "groupName is required");
            this.groupType = java.util.Objects.requireNonNull(builder.groupType, "groupType is required");
            this.autoStopInterval = builder.autoStopInterval;
            this.clusterMode = builder.clusterMode;
            this.clusterSizeResource = builder.clusterSizeResource;
            this.enableSpot = builder.enableSpot;
            this.engineParams = builder.engineParams;
            this.maxClusterCount = builder.maxClusterCount;
            this.maxComputeResource = builder.maxComputeResource;
            this.minClusterCount = builder.minClusterCount;
            this.minComputeResource = builder.minComputeResource;
            this.rules = builder.rules;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getEngine() {
            return this.engine;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getGroupType() {
            return this.groupType;
        }

        @Override
        public final java.lang.Object getAutoStopInterval() {
            return this.autoStopInterval;
        }

        @Override
        public final java.lang.Object getClusterMode() {
            return this.clusterMode;
        }

        @Override
        public final java.lang.Object getClusterSizeResource() {
            return this.clusterSizeResource;
        }

        @Override
        public final java.lang.Object getEnableSpot() {
            return this.enableSpot;
        }

        @Override
        public final java.lang.Object getEngineParams() {
            return this.engineParams;
        }

        @Override
        public final java.lang.Object getMaxClusterCount() {
            return this.maxClusterCount;
        }

        @Override
        public final java.lang.Object getMaxComputeResource() {
            return this.maxComputeResource;
        }

        @Override
        public final java.lang.Object getMinClusterCount() {
            return this.minClusterCount;
        }

        @Override
        public final java.lang.Object getMinComputeResource() {
            return this.minComputeResource;
        }

        @Override
        public final java.lang.Object getRules() {
            return this.rules;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            data.set("engine", om.valueToTree(this.getEngine()));
            data.set("groupName", om.valueToTree(this.getGroupName()));
            data.set("groupType", om.valueToTree(this.getGroupType()));
            if (this.getAutoStopInterval() != null) {
                data.set("autoStopInterval", om.valueToTree(this.getAutoStopInterval()));
            }
            if (this.getClusterMode() != null) {
                data.set("clusterMode", om.valueToTree(this.getClusterMode()));
            }
            if (this.getClusterSizeResource() != null) {
                data.set("clusterSizeResource", om.valueToTree(this.getClusterSizeResource()));
            }
            if (this.getEnableSpot() != null) {
                data.set("enableSpot", om.valueToTree(this.getEnableSpot()));
            }
            if (this.getEngineParams() != null) {
                data.set("engineParams", om.valueToTree(this.getEngineParams()));
            }
            if (this.getMaxClusterCount() != null) {
                data.set("maxClusterCount", om.valueToTree(this.getMaxClusterCount()));
            }
            if (this.getMaxComputeResource() != null) {
                data.set("maxComputeResource", om.valueToTree(this.getMaxComputeResource()));
            }
            if (this.getMinClusterCount() != null) {
                data.set("minClusterCount", om.valueToTree(this.getMinClusterCount()));
            }
            if (this.getMinComputeResource() != null) {
                data.set("minComputeResource", om.valueToTree(this.getMinComputeResource()));
            }
            if (this.getRules() != null) {
                data.set("rules", om.valueToTree(this.getRules()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-adblake.RosResourceGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosResourceGroupProps.Jsii$Proxy that = (RosResourceGroupProps.Jsii$Proxy) o;

            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (!engine.equals(that.engine)) return false;
            if (!groupName.equals(that.groupName)) return false;
            if (!groupType.equals(that.groupType)) return false;
            if (this.autoStopInterval != null ? !this.autoStopInterval.equals(that.autoStopInterval) : that.autoStopInterval != null) return false;
            if (this.clusterMode != null ? !this.clusterMode.equals(that.clusterMode) : that.clusterMode != null) return false;
            if (this.clusterSizeResource != null ? !this.clusterSizeResource.equals(that.clusterSizeResource) : that.clusterSizeResource != null) return false;
            if (this.enableSpot != null ? !this.enableSpot.equals(that.enableSpot) : that.enableSpot != null) return false;
            if (this.engineParams != null ? !this.engineParams.equals(that.engineParams) : that.engineParams != null) return false;
            if (this.maxClusterCount != null ? !this.maxClusterCount.equals(that.maxClusterCount) : that.maxClusterCount != null) return false;
            if (this.maxComputeResource != null ? !this.maxComputeResource.equals(that.maxComputeResource) : that.maxComputeResource != null) return false;
            if (this.minClusterCount != null ? !this.minClusterCount.equals(that.minClusterCount) : that.minClusterCount != null) return false;
            if (this.minComputeResource != null ? !this.minComputeResource.equals(that.minComputeResource) : that.minComputeResource != null) return false;
            return this.rules != null ? this.rules.equals(that.rules) : that.rules == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbClusterId.hashCode();
            result = 31 * result + (this.engine.hashCode());
            result = 31 * result + (this.groupName.hashCode());
            result = 31 * result + (this.groupType.hashCode());
            result = 31 * result + (this.autoStopInterval != null ? this.autoStopInterval.hashCode() : 0);
            result = 31 * result + (this.clusterMode != null ? this.clusterMode.hashCode() : 0);
            result = 31 * result + (this.clusterSizeResource != null ? this.clusterSizeResource.hashCode() : 0);
            result = 31 * result + (this.enableSpot != null ? this.enableSpot.hashCode() : 0);
            result = 31 * result + (this.engineParams != null ? this.engineParams.hashCode() : 0);
            result = 31 * result + (this.maxClusterCount != null ? this.maxClusterCount.hashCode() : 0);
            result = 31 * result + (this.maxComputeResource != null ? this.maxComputeResource.hashCode() : 0);
            result = 31 * result + (this.minClusterCount != null ? this.minClusterCount.hashCode() : 0);
            result = 31 * result + (this.minComputeResource != null ? this.minComputeResource.hashCode() : 0);
            result = 31 * result + (this.rules != null ? this.rules.hashCode() : 0);
            return result;
        }
    }
}
