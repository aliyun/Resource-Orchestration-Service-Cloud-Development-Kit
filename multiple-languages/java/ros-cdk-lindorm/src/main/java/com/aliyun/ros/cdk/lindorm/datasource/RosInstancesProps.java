package com.aliyun.ros.cdk.lindorm.datasource;

/**
 * Properties for defining a <code>RosInstances</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-lindorm-instances
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:31.507Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.lindorm.$Module.class, fqn = "@alicloud/ros-cdk-lindorm.datasource.RosInstancesProps")
@software.amazon.jsii.Jsii.Proxy(RosInstancesProps.Jsii$Proxy.class)
public interface RosInstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueryStr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSupportEngine() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.lindorm.datasource.RosInstances.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosInstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosInstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosInstancesProps> {
        java.lang.Object instanceIds;
        java.lang.Object queryStr;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;
        java.lang.Object serviceType;
        java.lang.Object supportEngine;
        java.util.List<com.aliyun.ros.cdk.lindorm.datasource.RosInstances.TagsProperty> tags;

        /**
         * Sets the value of {@link RosInstancesProps#getInstanceIds}
         * @param instanceIds the value to be set.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getInstanceIds}
         * @param instanceIds the value to be set.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getQueryStr}
         * @param queryStr the value to be set.
         * @return {@code this}
         */
        public Builder queryStr(java.lang.String queryStr) {
            this.queryStr = queryStr;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getQueryStr}
         * @param queryStr the value to be set.
         * @return {@code this}
         */
        public Builder queryStr(com.aliyun.ros.cdk.core.IResolvable queryStr) {
            this.queryStr = queryStr;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getServiceType}
         * @param serviceType the value to be set.
         * @return {@code this}
         */
        public Builder serviceType(java.lang.String serviceType) {
            this.serviceType = serviceType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getServiceType}
         * @param serviceType the value to be set.
         * @return {@code this}
         */
        public Builder serviceType(com.aliyun.ros.cdk.core.IResolvable serviceType) {
            this.serviceType = serviceType;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getSupportEngine}
         * @param supportEngine the value to be set.
         * @return {@code this}
         */
        public Builder supportEngine(java.lang.Number supportEngine) {
            this.supportEngine = supportEngine;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getSupportEngine}
         * @param supportEngine the value to be set.
         * @return {@code this}
         */
        public Builder supportEngine(com.aliyun.ros.cdk.core.IResolvable supportEngine) {
            this.supportEngine = supportEngine;
            return this;
        }

        /**
         * Sets the value of {@link RosInstancesProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.lindorm.datasource.RosInstances.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.lindorm.datasource.RosInstances.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosInstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosInstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosInstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosInstancesProps {
        private final java.lang.Object instanceIds;
        private final java.lang.Object queryStr;
        private final java.lang.Object refreshOptions;
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
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.refreshOptions = builder.refreshOptions;
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
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
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
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-lindorm.datasource.RosInstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosInstancesProps.Jsii$Proxy that = (RosInstancesProps.Jsii$Proxy) o;

            if (this.instanceIds != null ? !this.instanceIds.equals(that.instanceIds) : that.instanceIds != null) return false;
            if (this.queryStr != null ? !this.queryStr.equals(that.queryStr) : that.queryStr != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.serviceType != null ? !this.serviceType.equals(that.serviceType) : that.serviceType != null) return false;
            if (this.supportEngine != null ? !this.supportEngine.equals(that.supportEngine) : that.supportEngine != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceIds != null ? this.instanceIds.hashCode() : 0;
            result = 31 * result + (this.queryStr != null ? this.queryStr.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.serviceType != null ? this.serviceType.hashCode() : 0);
            result = 31 * result + (this.supportEngine != null ? this.supportEngine.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
