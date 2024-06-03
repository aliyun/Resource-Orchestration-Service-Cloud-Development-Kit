package com.aliyun.ros.cdk.lindorm.datasource;

/**
 * Properties for defining a <code>Instances</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-lindorm-instances
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:52.778Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.lindorm.$Module.class, fqn = "@alicloud/ros-cdk-lindorm.datasource.InstancesProps")
@software.amazon.jsii.Jsii.Proxy(InstancesProps.Jsii$Proxy.class)
public interface InstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceIds: The list of the instance id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIds() {
        return null;
    }

    /**
     * Property queryStr: Instance name keyword, which can be used for fuzzy search.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueryStr() {
        return null;
    }

    /**
     * Property resourceGroupId: The resource group id of lindorm instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property serviceType: The type of lindorm instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceType() {
        return null;
    }

    /**
     * Property supportEngine: Database engine types supported by the queried instance.
     * <p>
     * 1: Support search engines.
     * 2: Support timing engine.
     * 4: Support wide table engine.
     * 8: Support file engine.
     * Note For example: the value of SupportEngine is 15, 15=8+4+2+1, which means that the instance supports search engine, timing engine, wide table engine and file engine. The value of SupportEngine is 6, 6=4+2, indicating that the instance supports timing engine and wide table engine.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSupportEngine() {
        return null;
    }

    /**
     * Property tags: Tags of lindorm instance.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.lindorm.datasource.RosInstances.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstancesProps> {
        java.lang.Object instanceIds;
        java.lang.Object queryStr;
        java.lang.Object resourceGroupId;
        java.lang.Object serviceType;
        java.lang.Object supportEngine;
        java.util.List<com.aliyun.ros.cdk.lindorm.datasource.RosInstances.TagsProperty> tags;

        /**
         * Sets the value of {@link InstancesProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The list of the instance id.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceIds}
         * @param instanceIds Property instanceIds: The list of the instance id.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getQueryStr}
         * @param queryStr Property queryStr: Instance name keyword, which can be used for fuzzy search.
         * @return {@code this}
         */
        public Builder queryStr(java.lang.String queryStr) {
            this.queryStr = queryStr;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getQueryStr}
         * @param queryStr Property queryStr: Instance name keyword, which can be used for fuzzy search.
         * @return {@code this}
         */
        public Builder queryStr(com.aliyun.ros.cdk.core.IResolvable queryStr) {
            this.queryStr = queryStr;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group id of lindorm instance.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group id of lindorm instance.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getServiceType}
         * @param serviceType Property serviceType: The type of lindorm instance.
         * @return {@code this}
         */
        public Builder serviceType(java.lang.String serviceType) {
            this.serviceType = serviceType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getServiceType}
         * @param serviceType Property serviceType: The type of lindorm instance.
         * @return {@code this}
         */
        public Builder serviceType(com.aliyun.ros.cdk.core.IResolvable serviceType) {
            this.serviceType = serviceType;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getSupportEngine}
         * @param supportEngine Property supportEngine: Database engine types supported by the queried instance.
         *                      1: Support search engines.
         *                      2: Support timing engine.
         *                      4: Support wide table engine.
         *                      8: Support file engine.
         *                      Note For example: the value of SupportEngine is 15, 15=8+4+2+1, which means that the instance supports search engine, timing engine, wide table engine and file engine. The value of SupportEngine is 6, 6=4+2, indicating that the instance supports timing engine and wide table engine.
         * @return {@code this}
         */
        public Builder supportEngine(java.lang.Number supportEngine) {
            this.supportEngine = supportEngine;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getSupportEngine}
         * @param supportEngine Property supportEngine: Database engine types supported by the queried instance.
         *                      1: Support search engines.
         *                      2: Support timing engine.
         *                      4: Support wide table engine.
         *                      8: Support file engine.
         *                      Note For example: the value of SupportEngine is 15, 15=8+4+2+1, which means that the instance supports search engine, timing engine, wide table engine and file engine. The value of SupportEngine is 6, 6=4+2, indicating that the instance supports timing engine and wide table engine.
         * @return {@code this}
         */
        public Builder supportEngine(com.aliyun.ros.cdk.core.IResolvable supportEngine) {
            this.supportEngine = supportEngine;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getTags}
         * @param tags Property tags: Tags of lindorm instance.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.lindorm.datasource.RosInstances.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.lindorm.datasource.RosInstances.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstancesProps {
        private final java.lang.Object instanceIds;
        private final java.lang.Object queryStr;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object serviceType;
        private final java.lang.Object supportEngine;
        private final java.util.List<com.aliyun.ros.cdk.lindorm.datasource.RosInstances.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queryStr = software.amazon.jsii.Kernel.get(this, "queryStr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceType = software.amazon.jsii.Kernel.get(this, "serviceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.supportEngine = software.amazon.jsii.Kernel.get(this, "supportEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.lindorm.datasource.RosInstances.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceIds = builder.instanceIds;
            this.queryStr = builder.queryStr;
            this.resourceGroupId = builder.resourceGroupId;
            this.serviceType = builder.serviceType;
            this.supportEngine = builder.supportEngine;
            this.tags = (java.util.List<com.aliyun.ros.cdk.lindorm.datasource.RosInstances.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.Object getQueryStr() {
            return this.queryStr;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getServiceType() {
            return this.serviceType;
        }

        @Override
        public final java.lang.Object getSupportEngine() {
            return this.supportEngine;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.lindorm.datasource.RosInstances.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getInstanceIds() != null) {
                data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            }
            if (this.getQueryStr() != null) {
                data.set("queryStr", om.valueToTree(this.getQueryStr()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getServiceType() != null) {
                data.set("serviceType", om.valueToTree(this.getServiceType()));
            }
            if (this.getSupportEngine() != null) {
                data.set("supportEngine", om.valueToTree(this.getSupportEngine()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-lindorm.datasource.InstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstancesProps.Jsii$Proxy that = (InstancesProps.Jsii$Proxy) o;

            if (this.instanceIds != null ? !this.instanceIds.equals(that.instanceIds) : that.instanceIds != null) return false;
            if (this.queryStr != null ? !this.queryStr.equals(that.queryStr) : that.queryStr != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.serviceType != null ? !this.serviceType.equals(that.serviceType) : that.serviceType != null) return false;
            if (this.supportEngine != null ? !this.supportEngine.equals(that.supportEngine) : that.supportEngine != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceIds != null ? this.instanceIds.hashCode() : 0;
            result = 31 * result + (this.queryStr != null ? this.queryStr.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.serviceType != null ? this.serviceType.hashCode() : 0);
            result = 31 * result + (this.supportEngine != null ? this.supportEngine.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
