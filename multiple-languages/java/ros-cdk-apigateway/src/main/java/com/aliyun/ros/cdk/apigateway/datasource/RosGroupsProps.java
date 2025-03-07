package com.aliyun.ros.cdk.apigateway.datasource;

/**
 * Properties for defining a <code>RosGroups</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-groups
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.893Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.datasource.RosGroupsProps")
@software.amazon.jsii.Jsii.Proxy(RosGroupsProps.Jsii$Proxy.class)
public interface RosGroupsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSort() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosGroupsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGroupsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGroupsProps> {
        java.lang.Object groupId;
        java.lang.Object groupName;
        java.lang.Object instanceId;
        java.lang.Object refreshOptions;
        java.lang.Object sort;

        /**
         * Sets the value of {@link RosGroupsProps#getGroupId}
         * @param groupId the value to be set.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupsProps#getGroupId}
         * @param groupId the value to be set.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupsProps#getGroupName}
         * @param groupName the value to be set.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupsProps#getGroupName}
         * @param groupName the value to be set.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupsProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupsProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupsProps#getSort}
         * @param sort the value to be set.
         * @return {@code this}
         */
        public Builder sort(java.lang.String sort) {
            this.sort = sort;
            return this;
        }

        /**
         * Sets the value of {@link RosGroupsProps#getSort}
         * @param sort the value to be set.
         * @return {@code this}
         */
        public Builder sort(com.aliyun.ros.cdk.core.IResolvable sort) {
            this.sort = sort;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGroupsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGroupsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGroupsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGroupsProps {
        private final java.lang.Object groupId;
        private final java.lang.Object groupName;
        private final java.lang.Object instanceId;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object sort;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sort = software.amazon.jsii.Kernel.get(this, "sort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupId = builder.groupId;
            this.groupName = builder.groupName;
            this.instanceId = builder.instanceId;
            this.refreshOptions = builder.refreshOptions;
            this.sort = builder.sort;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getSort() {
            return this.sort;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getGroupId() != null) {
                data.set("groupId", om.valueToTree(this.getGroupId()));
            }
            if (this.getGroupName() != null) {
                data.set("groupName", om.valueToTree(this.getGroupName()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getSort() != null) {
                data.set("sort", om.valueToTree(this.getSort()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.datasource.RosGroupsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGroupsProps.Jsii$Proxy that = (RosGroupsProps.Jsii$Proxy) o;

            if (this.groupId != null ? !this.groupId.equals(that.groupId) : that.groupId != null) return false;
            if (this.groupName != null ? !this.groupName.equals(that.groupName) : that.groupName != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.sort != null ? this.sort.equals(that.sort) : that.sort == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupId != null ? this.groupId.hashCode() : 0;
            result = 31 * result + (this.groupName != null ? this.groupName.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.sort != null ? this.sort.hashCode() : 0);
            return result;
        }
    }
}
