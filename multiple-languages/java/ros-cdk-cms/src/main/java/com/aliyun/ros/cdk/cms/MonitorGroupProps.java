package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a `ALIYUN::CMS::MonitorGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:35.251Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.MonitorGroupProps")
@software.amazon.jsii.Jsii.Proxy(MonitorGroupProps.Jsii$Proxy.class)
public interface MonitorGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getGroupName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getContactGroups() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MonitorGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MonitorGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MonitorGroupProps> {
        private java.lang.String groupName;
        private java.lang.String contactGroups;

        /**
         * Sets the value of {@link MonitorGroupProps#getGroupName}
         * @param groupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link MonitorGroupProps#getContactGroups}
         * @param contactGroups the value to be set.
         * @return {@code this}
         */
        public Builder contactGroups(java.lang.String contactGroups) {
            this.contactGroups = contactGroups;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MonitorGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MonitorGroupProps build() {
            return new Jsii$Proxy(groupName, contactGroups);
        }
    }

    /**
     * An implementation for {@link MonitorGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MonitorGroupProps {
        private final java.lang.String groupName;
        private final java.lang.String contactGroups;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.contactGroups = software.amazon.jsii.Kernel.get(this, "contactGroups", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String groupName, final java.lang.String contactGroups) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupName = java.util.Objects.requireNonNull(groupName, "groupName is required");
            this.contactGroups = contactGroups;
        }

        @Override
        public final java.lang.String getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.String getContactGroups() {
            return this.contactGroups;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("groupName", om.valueToTree(this.getGroupName()));
            if (this.getContactGroups() != null) {
                data.set("contactGroups", om.valueToTree(this.getContactGroups()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.MonitorGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MonitorGroupProps.Jsii$Proxy that = (MonitorGroupProps.Jsii$Proxy) o;

            if (!groupName.equals(that.groupName)) return false;
            return this.contactGroups != null ? this.contactGroups.equals(that.contactGroups) : that.contactGroups == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupName.hashCode();
            result = 31 * result + (this.contactGroups != null ? this.contactGroups.hashCode() : 0);
            return result;
        }
    }
}
