package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>Quota</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-quota
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:20:13.814Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.QuotaProps")
@software.amazon.jsii.Jsii.Proxy(QuotaProps.Jsii$Proxy.class)
public interface QuotaProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property quotaName: The name of the quota.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getQuotaName();

    /**
     * Property allocateStrategy: The allocation strategy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocateStrategy() {
        return null;
    }

    /**
     * Property clusterSpec: The cluster specification.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterSpec() {
        return null;
    }

    /**
     * Property description: The description of the quota.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property labels: The labels associated with the quota.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLabels() {
        return null;
    }

    /**
     * Property min: The minimum resource allocation configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMin() {
        return null;
    }

    /**
     * Property parentQuotaId: The ID of the parent quota.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParentQuotaId() {
        return null;
    }

    /**
     * Property queueStrategy: The queue strategy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueueStrategy() {
        return null;
    }

    /**
     * Property quotaConfig: The quota configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQuotaConfig() {
        return null;
    }

    /**
     * Property resourceGroupIds: The list of resource group IDs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupIds() {
        return null;
    }

    /**
     * Property resourceType: The type of the resource.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link QuotaProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link QuotaProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<QuotaProps> {
        java.lang.Object quotaName;
        java.lang.Object allocateStrategy;
        java.lang.Object clusterSpec;
        java.lang.Object description;
        java.lang.Object labels;
        java.lang.Object min;
        java.lang.Object parentQuotaId;
        java.lang.Object queueStrategy;
        java.lang.Object quotaConfig;
        java.lang.Object resourceGroupIds;
        java.lang.Object resourceType;

        /**
         * Sets the value of {@link QuotaProps#getQuotaName}
         * @param quotaName Property quotaName: The name of the quota. This parameter is required.
         * @return {@code this}
         */
        public Builder quotaName(java.lang.String quotaName) {
            this.quotaName = quotaName;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getQuotaName}
         * @param quotaName Property quotaName: The name of the quota. This parameter is required.
         * @return {@code this}
         */
        public Builder quotaName(com.aliyun.ros.cdk.core.IResolvable quotaName) {
            this.quotaName = quotaName;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getAllocateStrategy}
         * @param allocateStrategy Property allocateStrategy: The allocation strategy.
         * @return {@code this}
         */
        public Builder allocateStrategy(java.lang.String allocateStrategy) {
            this.allocateStrategy = allocateStrategy;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getAllocateStrategy}
         * @param allocateStrategy Property allocateStrategy: The allocation strategy.
         * @return {@code this}
         */
        public Builder allocateStrategy(com.aliyun.ros.cdk.core.IResolvable allocateStrategy) {
            this.allocateStrategy = allocateStrategy;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getClusterSpec}
         * @param clusterSpec Property clusterSpec: The cluster specification.
         * @return {@code this}
         */
        public Builder clusterSpec(com.aliyun.ros.cdk.core.IResolvable clusterSpec) {
            this.clusterSpec = clusterSpec;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getClusterSpec}
         * @param clusterSpec Property clusterSpec: The cluster specification.
         * @return {@code this}
         */
        public Builder clusterSpec(java.util.Map<java.lang.String, ? extends java.lang.Object> clusterSpec) {
            this.clusterSpec = clusterSpec;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getDescription}
         * @param description Property description: The description of the quota.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getDescription}
         * @param description Property description: The description of the quota.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getLabels}
         * @param labels Property labels: The labels associated with the quota.
         * @return {@code this}
         */
        public Builder labels(com.aliyun.ros.cdk.core.IResolvable labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getLabels}
         * @param labels Property labels: The labels associated with the quota.
         * @return {@code this}
         */
        public Builder labels(java.util.List<? extends java.lang.Object> labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getMin}
         * @param min Property min: The minimum resource allocation configuration.
         * @return {@code this}
         */
        public Builder min(com.aliyun.ros.cdk.core.IResolvable min) {
            this.min = min;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getMin}
         * @param min Property min: The minimum resource allocation configuration.
         * @return {@code this}
         */
        public Builder min(com.aliyun.ros.cdk.pai.RosQuota.MinProperty min) {
            this.min = min;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getParentQuotaId}
         * @param parentQuotaId Property parentQuotaId: The ID of the parent quota.
         * @return {@code this}
         */
        public Builder parentQuotaId(java.lang.String parentQuotaId) {
            this.parentQuotaId = parentQuotaId;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getParentQuotaId}
         * @param parentQuotaId Property parentQuotaId: The ID of the parent quota.
         * @return {@code this}
         */
        public Builder parentQuotaId(com.aliyun.ros.cdk.core.IResolvable parentQuotaId) {
            this.parentQuotaId = parentQuotaId;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getQueueStrategy}
         * @param queueStrategy Property queueStrategy: The queue strategy.
         * @return {@code this}
         */
        public Builder queueStrategy(java.lang.String queueStrategy) {
            this.queueStrategy = queueStrategy;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getQueueStrategy}
         * @param queueStrategy Property queueStrategy: The queue strategy.
         * @return {@code this}
         */
        public Builder queueStrategy(com.aliyun.ros.cdk.core.IResolvable queueStrategy) {
            this.queueStrategy = queueStrategy;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getQuotaConfig}
         * @param quotaConfig Property quotaConfig: The quota configuration.
         * @return {@code this}
         */
        public Builder quotaConfig(com.aliyun.ros.cdk.core.IResolvable quotaConfig) {
            this.quotaConfig = quotaConfig;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getQuotaConfig}
         * @param quotaConfig Property quotaConfig: The quota configuration.
         * @return {@code this}
         */
        public Builder quotaConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> quotaConfig) {
            this.quotaConfig = quotaConfig;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getResourceGroupIds}
         * @param resourceGroupIds Property resourceGroupIds: The list of resource group IDs.
         * @return {@code this}
         */
        public Builder resourceGroupIds(com.aliyun.ros.cdk.core.IResolvable resourceGroupIds) {
            this.resourceGroupIds = resourceGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getResourceGroupIds}
         * @param resourceGroupIds Property resourceGroupIds: The list of resource group IDs.
         * @return {@code this}
         */
        public Builder resourceGroupIds(java.util.List<? extends java.lang.Object> resourceGroupIds) {
            this.resourceGroupIds = resourceGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getResourceType}
         * @param resourceType Property resourceType: The type of the resource.
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link QuotaProps#getResourceType}
         * @param resourceType Property resourceType: The type of the resource.
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link QuotaProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public QuotaProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link QuotaProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements QuotaProps {
        private final java.lang.Object quotaName;
        private final java.lang.Object allocateStrategy;
        private final java.lang.Object clusterSpec;
        private final java.lang.Object description;
        private final java.lang.Object labels;
        private final java.lang.Object min;
        private final java.lang.Object parentQuotaId;
        private final java.lang.Object queueStrategy;
        private final java.lang.Object quotaConfig;
        private final java.lang.Object resourceGroupIds;
        private final java.lang.Object resourceType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.quotaName = software.amazon.jsii.Kernel.get(this, "quotaName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allocateStrategy = software.amazon.jsii.Kernel.get(this, "allocateStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterSpec = software.amazon.jsii.Kernel.get(this, "clusterSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.labels = software.amazon.jsii.Kernel.get(this, "labels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.min = software.amazon.jsii.Kernel.get(this, "min", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parentQuotaId = software.amazon.jsii.Kernel.get(this, "parentQuotaId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queueStrategy = software.amazon.jsii.Kernel.get(this, "queueStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.quotaConfig = software.amazon.jsii.Kernel.get(this, "quotaConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupIds = software.amazon.jsii.Kernel.get(this, "resourceGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.quotaName = java.util.Objects.requireNonNull(builder.quotaName, "quotaName is required");
            this.allocateStrategy = builder.allocateStrategy;
            this.clusterSpec = builder.clusterSpec;
            this.description = builder.description;
            this.labels = builder.labels;
            this.min = builder.min;
            this.parentQuotaId = builder.parentQuotaId;
            this.queueStrategy = builder.queueStrategy;
            this.quotaConfig = builder.quotaConfig;
            this.resourceGroupIds = builder.resourceGroupIds;
            this.resourceType = builder.resourceType;
        }

        @Override
        public final java.lang.Object getQuotaName() {
            return this.quotaName;
        }

        @Override
        public final java.lang.Object getAllocateStrategy() {
            return this.allocateStrategy;
        }

        @Override
        public final java.lang.Object getClusterSpec() {
            return this.clusterSpec;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getLabels() {
            return this.labels;
        }

        @Override
        public final java.lang.Object getMin() {
            return this.min;
        }

        @Override
        public final java.lang.Object getParentQuotaId() {
            return this.parentQuotaId;
        }

        @Override
        public final java.lang.Object getQueueStrategy() {
            return this.queueStrategy;
        }

        @Override
        public final java.lang.Object getQuotaConfig() {
            return this.quotaConfig;
        }

        @Override
        public final java.lang.Object getResourceGroupIds() {
            return this.resourceGroupIds;
        }

        @Override
        public final java.lang.Object getResourceType() {
            return this.resourceType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("quotaName", om.valueToTree(this.getQuotaName()));
            if (this.getAllocateStrategy() != null) {
                data.set("allocateStrategy", om.valueToTree(this.getAllocateStrategy()));
            }
            if (this.getClusterSpec() != null) {
                data.set("clusterSpec", om.valueToTree(this.getClusterSpec()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getLabels() != null) {
                data.set("labels", om.valueToTree(this.getLabels()));
            }
            if (this.getMin() != null) {
                data.set("min", om.valueToTree(this.getMin()));
            }
            if (this.getParentQuotaId() != null) {
                data.set("parentQuotaId", om.valueToTree(this.getParentQuotaId()));
            }
            if (this.getQueueStrategy() != null) {
                data.set("queueStrategy", om.valueToTree(this.getQueueStrategy()));
            }
            if (this.getQuotaConfig() != null) {
                data.set("quotaConfig", om.valueToTree(this.getQuotaConfig()));
            }
            if (this.getResourceGroupIds() != null) {
                data.set("resourceGroupIds", om.valueToTree(this.getResourceGroupIds()));
            }
            if (this.getResourceType() != null) {
                data.set("resourceType", om.valueToTree(this.getResourceType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.QuotaProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            QuotaProps.Jsii$Proxy that = (QuotaProps.Jsii$Proxy) o;

            if (!quotaName.equals(that.quotaName)) return false;
            if (this.allocateStrategy != null ? !this.allocateStrategy.equals(that.allocateStrategy) : that.allocateStrategy != null) return false;
            if (this.clusterSpec != null ? !this.clusterSpec.equals(that.clusterSpec) : that.clusterSpec != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.labels != null ? !this.labels.equals(that.labels) : that.labels != null) return false;
            if (this.min != null ? !this.min.equals(that.min) : that.min != null) return false;
            if (this.parentQuotaId != null ? !this.parentQuotaId.equals(that.parentQuotaId) : that.parentQuotaId != null) return false;
            if (this.queueStrategy != null ? !this.queueStrategy.equals(that.queueStrategy) : that.queueStrategy != null) return false;
            if (this.quotaConfig != null ? !this.quotaConfig.equals(that.quotaConfig) : that.quotaConfig != null) return false;
            if (this.resourceGroupIds != null ? !this.resourceGroupIds.equals(that.resourceGroupIds) : that.resourceGroupIds != null) return false;
            return this.resourceType != null ? this.resourceType.equals(that.resourceType) : that.resourceType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.quotaName.hashCode();
            result = 31 * result + (this.allocateStrategy != null ? this.allocateStrategy.hashCode() : 0);
            result = 31 * result + (this.clusterSpec != null ? this.clusterSpec.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.labels != null ? this.labels.hashCode() : 0);
            result = 31 * result + (this.min != null ? this.min.hashCode() : 0);
            result = 31 * result + (this.parentQuotaId != null ? this.parentQuotaId.hashCode() : 0);
            result = 31 * result + (this.queueStrategy != null ? this.queueStrategy.hashCode() : 0);
            result = 31 * result + (this.quotaConfig != null ? this.quotaConfig.hashCode() : 0);
            result = 31 * result + (this.resourceGroupIds != null ? this.resourceGroupIds.hashCode() : 0);
            result = 31 * result + (this.resourceType != null ? this.resourceType.hashCode() : 0);
            return result;
        }
    }
}
