package com.aliyun.ros.cdk.ots;

/**
 * Properties for defining a <code>RosVCUInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vcuinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.656Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.RosVCUInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosVCUInstanceProps.Jsii$Proxy.class)
public interface RosVCUInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriodInMonth();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVcu();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAliasName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriodInMonth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableElasticVcu() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ots.RosVCUInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVCUInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVCUInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVCUInstanceProps> {
        java.lang.Object clusterType;
        java.lang.Object periodInMonth;
        java.lang.Object vcu;
        java.lang.Object aliasName;
        java.lang.Object autoRenewPeriodInMonth;
        java.lang.Object enableAutoRenew;
        java.lang.Object enableElasticVcu;
        java.lang.Object instanceDescription;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.ots.RosVCUInstance.TagsProperty> tags;

        /**
         * Sets the value of {@link RosVCUInstanceProps#getClusterType}
         * @param clusterType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getClusterType}
         * @param clusterType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getPeriodInMonth}
         * @param periodInMonth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder periodInMonth(java.lang.Number periodInMonth) {
            this.periodInMonth = periodInMonth;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getPeriodInMonth}
         * @param periodInMonth the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder periodInMonth(com.aliyun.ros.cdk.core.IResolvable periodInMonth) {
            this.periodInMonth = periodInMonth;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getVcu}
         * @param vcu the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vcu(java.lang.Number vcu) {
            this.vcu = vcu;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getVcu}
         * @param vcu the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vcu(com.aliyun.ros.cdk.core.IResolvable vcu) {
            this.vcu = vcu;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getAliasName}
         * @param aliasName the value to be set.
         * @return {@code this}
         */
        public Builder aliasName(java.lang.String aliasName) {
            this.aliasName = aliasName;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getAliasName}
         * @param aliasName the value to be set.
         * @return {@code this}
         */
        public Builder aliasName(com.aliyun.ros.cdk.core.IResolvable aliasName) {
            this.aliasName = aliasName;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getAutoRenewPeriodInMonth}
         * @param autoRenewPeriodInMonth the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriodInMonth(java.lang.Number autoRenewPeriodInMonth) {
            this.autoRenewPeriodInMonth = autoRenewPeriodInMonth;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getAutoRenewPeriodInMonth}
         * @param autoRenewPeriodInMonth the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriodInMonth(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriodInMonth) {
            this.autoRenewPeriodInMonth = autoRenewPeriodInMonth;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getEnableAutoRenew}
         * @param enableAutoRenew the value to be set.
         * @return {@code this}
         */
        public Builder enableAutoRenew(java.lang.Boolean enableAutoRenew) {
            this.enableAutoRenew = enableAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getEnableAutoRenew}
         * @param enableAutoRenew the value to be set.
         * @return {@code this}
         */
        public Builder enableAutoRenew(com.aliyun.ros.cdk.core.IResolvable enableAutoRenew) {
            this.enableAutoRenew = enableAutoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getEnableElasticVcu}
         * @param enableElasticVcu the value to be set.
         * @return {@code this}
         */
        public Builder enableElasticVcu(java.lang.Boolean enableElasticVcu) {
            this.enableElasticVcu = enableElasticVcu;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getEnableElasticVcu}
         * @param enableElasticVcu the value to be set.
         * @return {@code this}
         */
        public Builder enableElasticVcu(com.aliyun.ros.cdk.core.IResolvable enableElasticVcu) {
            this.enableElasticVcu = enableElasticVcu;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getInstanceDescription}
         * @param instanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder instanceDescription(java.lang.String instanceDescription) {
            this.instanceDescription = instanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getInstanceDescription}
         * @param instanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder instanceDescription(com.aliyun.ros.cdk.core.IResolvable instanceDescription) {
            this.instanceDescription = instanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosVCUInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ots.RosVCUInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ots.RosVCUInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVCUInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVCUInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVCUInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVCUInstanceProps {
        private final java.lang.Object clusterType;
        private final java.lang.Object periodInMonth;
        private final java.lang.Object vcu;
        private final java.lang.Object aliasName;
        private final java.lang.Object autoRenewPeriodInMonth;
        private final java.lang.Object enableAutoRenew;
        private final java.lang.Object enableElasticVcu;
        private final java.lang.Object instanceDescription;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ots.RosVCUInstance.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodInMonth = software.amazon.jsii.Kernel.get(this, "periodInMonth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vcu = software.amazon.jsii.Kernel.get(this, "vcu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aliasName = software.amazon.jsii.Kernel.get(this, "aliasName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriodInMonth = software.amazon.jsii.Kernel.get(this, "autoRenewPeriodInMonth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAutoRenew = software.amazon.jsii.Kernel.get(this, "enableAutoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableElasticVcu = software.amazon.jsii.Kernel.get(this, "enableElasticVcu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceDescription = software.amazon.jsii.Kernel.get(this, "instanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ots.RosVCUInstance.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterType = java.util.Objects.requireNonNull(builder.clusterType, "clusterType is required");
            this.periodInMonth = java.util.Objects.requireNonNull(builder.periodInMonth, "periodInMonth is required");
            this.vcu = java.util.Objects.requireNonNull(builder.vcu, "vcu is required");
            this.aliasName = builder.aliasName;
            this.autoRenewPeriodInMonth = builder.autoRenewPeriodInMonth;
            this.enableAutoRenew = builder.enableAutoRenew;
            this.enableElasticVcu = builder.enableElasticVcu;
            this.instanceDescription = builder.instanceDescription;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ots.RosVCUInstance.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Object getPeriodInMonth() {
            return this.periodInMonth;
        }

        @Override
        public final java.lang.Object getVcu() {
            return this.vcu;
        }

        @Override
        public final java.lang.Object getAliasName() {
            return this.aliasName;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriodInMonth() {
            return this.autoRenewPeriodInMonth;
        }

        @Override
        public final java.lang.Object getEnableAutoRenew() {
            return this.enableAutoRenew;
        }

        @Override
        public final java.lang.Object getEnableElasticVcu() {
            return this.enableElasticVcu;
        }

        @Override
        public final java.lang.Object getInstanceDescription() {
            return this.instanceDescription;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ots.RosVCUInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterType", om.valueToTree(this.getClusterType()));
            data.set("periodInMonth", om.valueToTree(this.getPeriodInMonth()));
            data.set("vcu", om.valueToTree(this.getVcu()));
            if (this.getAliasName() != null) {
                data.set("aliasName", om.valueToTree(this.getAliasName()));
            }
            if (this.getAutoRenewPeriodInMonth() != null) {
                data.set("autoRenewPeriodInMonth", om.valueToTree(this.getAutoRenewPeriodInMonth()));
            }
            if (this.getEnableAutoRenew() != null) {
                data.set("enableAutoRenew", om.valueToTree(this.getEnableAutoRenew()));
            }
            if (this.getEnableElasticVcu() != null) {
                data.set("enableElasticVcu", om.valueToTree(this.getEnableElasticVcu()));
            }
            if (this.getInstanceDescription() != null) {
                data.set("instanceDescription", om.valueToTree(this.getInstanceDescription()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ots.RosVCUInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVCUInstanceProps.Jsii$Proxy that = (RosVCUInstanceProps.Jsii$Proxy) o;

            if (!clusterType.equals(that.clusterType)) return false;
            if (!periodInMonth.equals(that.periodInMonth)) return false;
            if (!vcu.equals(that.vcu)) return false;
            if (this.aliasName != null ? !this.aliasName.equals(that.aliasName) : that.aliasName != null) return false;
            if (this.autoRenewPeriodInMonth != null ? !this.autoRenewPeriodInMonth.equals(that.autoRenewPeriodInMonth) : that.autoRenewPeriodInMonth != null) return false;
            if (this.enableAutoRenew != null ? !this.enableAutoRenew.equals(that.enableAutoRenew) : that.enableAutoRenew != null) return false;
            if (this.enableElasticVcu != null ? !this.enableElasticVcu.equals(that.enableElasticVcu) : that.enableElasticVcu != null) return false;
            if (this.instanceDescription != null ? !this.instanceDescription.equals(that.instanceDescription) : that.instanceDescription != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterType.hashCode();
            result = 31 * result + (this.periodInMonth.hashCode());
            result = 31 * result + (this.vcu.hashCode());
            result = 31 * result + (this.aliasName != null ? this.aliasName.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriodInMonth != null ? this.autoRenewPeriodInMonth.hashCode() : 0);
            result = 31 * result + (this.enableAutoRenew != null ? this.enableAutoRenew.hashCode() : 0);
            result = 31 * result + (this.enableElasticVcu != null ? this.enableElasticVcu.hashCode() : 0);
            result = 31 * result + (this.instanceDescription != null ? this.instanceDescription.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
