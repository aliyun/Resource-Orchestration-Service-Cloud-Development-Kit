package com.aliyun.ros.cdk.cms.datasource;

/**
 * Properties for defining a <code>RosSlsGroups</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-slsgroups
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:03.166Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.datasource.RosSlsGroupsProps")
@software.amazon.jsii.Jsii.Proxy(RosSlsGroupsProps.Jsii$Proxy.class)
public interface RosSlsGroupsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsGroupName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosSlsGroupsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSlsGroupsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSlsGroupsProps> {
        java.lang.Object refreshOptions;
        java.lang.Object slsGroupName;

        /**
         * Sets the value of {@link RosSlsGroupsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosSlsGroupsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosSlsGroupsProps#getSlsGroupName}
         * @param slsGroupName the value to be set.
         * @return {@code this}
         */
        public Builder slsGroupName(java.lang.String slsGroupName) {
            this.slsGroupName = slsGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosSlsGroupsProps#getSlsGroupName}
         * @param slsGroupName the value to be set.
         * @return {@code this}
         */
        public Builder slsGroupName(com.aliyun.ros.cdk.core.IResolvable slsGroupName) {
            this.slsGroupName = slsGroupName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSlsGroupsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSlsGroupsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSlsGroupsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSlsGroupsProps {
        private final java.lang.Object refreshOptions;
        private final java.lang.Object slsGroupName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsGroupName = software.amazon.jsii.Kernel.get(this, "slsGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.refreshOptions = builder.refreshOptions;
            this.slsGroupName = builder.slsGroupName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getSlsGroupName() {
            return this.slsGroupName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getSlsGroupName() != null) {
                data.set("slsGroupName", om.valueToTree(this.getSlsGroupName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.datasource.RosSlsGroupsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSlsGroupsProps.Jsii$Proxy that = (RosSlsGroupsProps.Jsii$Proxy) o;

            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.slsGroupName != null ? this.slsGroupName.equals(that.slsGroupName) : that.slsGroupName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.refreshOptions != null ? this.refreshOptions.hashCode() : 0;
            result = 31 * result + (this.slsGroupName != null ? this.slsGroupName.hashCode() : 0);
            return result;
        }
    }
}
