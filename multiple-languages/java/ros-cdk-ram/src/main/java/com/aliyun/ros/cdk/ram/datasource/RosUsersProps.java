package com.aliyun.ros.cdk.ram.datasource;

/**
 * Properties for defining a <code>DATASOURCE::RAM::Users</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:26.438Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.datasource.RosUsersProps")
@software.amazon.jsii.Jsii.Proxy(RosUsersProps.Jsii$Proxy.class)
public interface RosUsersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosUsersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosUsersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosUsersProps> {
        java.lang.Object groupName;
        java.lang.Object userName;

        /**
         * Sets the value of {@link RosUsersProps#getGroupName}
         * @param groupName the value to be set.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosUsersProps#getGroupName}
         * @param groupName the value to be set.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link RosUsersProps#getUserName}
         * @param userName the value to be set.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link RosUsersProps#getUserName}
         * @param userName the value to be set.
         * @return {@code this}
         */
        public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosUsersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosUsersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosUsersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosUsersProps {
        private final java.lang.Object groupName;
        private final java.lang.Object userName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupName = builder.groupName;
            this.userName = builder.userName;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getUserName() {
            return this.userName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getGroupName() != null) {
                data.set("groupName", om.valueToTree(this.getGroupName()));
            }
            if (this.getUserName() != null) {
                data.set("userName", om.valueToTree(this.getUserName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.datasource.RosUsersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosUsersProps.Jsii$Proxy that = (RosUsersProps.Jsii$Proxy) o;

            if (this.groupName != null ? !this.groupName.equals(that.groupName) : that.groupName != null) return false;
            return this.userName != null ? this.userName.equals(that.userName) : that.userName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupName != null ? this.groupName.hashCode() : 0;
            result = 31 * result + (this.userName != null ? this.userName.hashCode() : 0);
            return result;
        }
    }
}
