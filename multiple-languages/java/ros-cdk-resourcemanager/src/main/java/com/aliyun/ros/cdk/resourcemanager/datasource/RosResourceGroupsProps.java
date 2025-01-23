package com.aliyun.ros.cdk.resourcemanager.datasource;

/**
 * Properties for defining a <code>RosResourceGroups</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroups
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:43.691Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.datasource.RosResourceGroupsProps")
@software.amazon.jsii.Jsii.Proxy(RosResourceGroupsProps.Jsii$Proxy.class)
public interface RosResourceGroupsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisplayName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIncludeTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosResourceGroupsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosResourceGroupsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosResourceGroupsProps> {
        java.lang.Object displayName;
        java.lang.Object includeTags;
        java.lang.Object name;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupIds;

        /**
         * Sets the value of {@link RosResourceGroupsProps#getDisplayName}
         * @param displayName the value to be set.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupsProps#getDisplayName}
         * @param displayName the value to be set.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupsProps#getIncludeTags}
         * @param includeTags the value to be set.
         * @return {@code this}
         */
        public Builder includeTags(java.lang.Boolean includeTags) {
            this.includeTags = includeTags;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupsProps#getIncludeTags}
         * @param includeTags the value to be set.
         * @return {@code this}
         */
        public Builder includeTags(com.aliyun.ros.cdk.core.IResolvable includeTags) {
            this.includeTags = includeTags;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupsProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupsProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupsProps#getResourceGroupIds}
         * @param resourceGroupIds the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupIds(com.aliyun.ros.cdk.core.IResolvable resourceGroupIds) {
            this.resourceGroupIds = resourceGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceGroupsProps#getResourceGroupIds}
         * @param resourceGroupIds the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupIds(java.util.List<? extends java.lang.Object> resourceGroupIds) {
            this.resourceGroupIds = resourceGroupIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosResourceGroupsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosResourceGroupsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosResourceGroupsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosResourceGroupsProps {
        private final java.lang.Object displayName;
        private final java.lang.Object includeTags;
        private final java.lang.Object name;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.includeTags = software.amazon.jsii.Kernel.get(this, "includeTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupIds = software.amazon.jsii.Kernel.get(this, "resourceGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.displayName = builder.displayName;
            this.includeTags = builder.includeTags;
            this.name = builder.name;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupIds = builder.resourceGroupIds;
        }

        @Override
        public final java.lang.Object getDisplayName() {
            return this.displayName;
        }

        @Override
        public final java.lang.Object getIncludeTags() {
            return this.includeTags;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getResourceGroupIds() {
            return this.resourceGroupIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDisplayName() != null) {
                data.set("displayName", om.valueToTree(this.getDisplayName()));
            }
            if (this.getIncludeTags() != null) {
                data.set("includeTags", om.valueToTree(this.getIncludeTags()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupIds() != null) {
                data.set("resourceGroupIds", om.valueToTree(this.getResourceGroupIds()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.datasource.RosResourceGroupsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosResourceGroupsProps.Jsii$Proxy that = (RosResourceGroupsProps.Jsii$Proxy) o;

            if (this.displayName != null ? !this.displayName.equals(that.displayName) : that.displayName != null) return false;
            if (this.includeTags != null ? !this.includeTags.equals(that.includeTags) : that.includeTags != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.resourceGroupIds != null ? this.resourceGroupIds.equals(that.resourceGroupIds) : that.resourceGroupIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.displayName != null ? this.displayName.hashCode() : 0;
            result = 31 * result + (this.includeTags != null ? this.includeTags.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupIds != null ? this.resourceGroupIds.hashCode() : 0);
            return result;
        }
    }
}
