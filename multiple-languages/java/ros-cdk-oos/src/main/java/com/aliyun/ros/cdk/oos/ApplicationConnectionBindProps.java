package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a <code>ApplicationConnectionBind</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnectionbind
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:28.146Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.ApplicationConnectionBindProps")
@software.amazon.jsii.Jsii.Proxy(ApplicationConnectionBindProps.Jsii$Proxy.class)
public interface ApplicationConnectionBindProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property connectionIds: The list of connection IDs to bind.
     * <p>
     * The maximum number of connections is 100.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConnectionIds();

    /**
     * Property applicationGroupName: The name of the application group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApplicationGroupName() {
        return null;
    }

    /**
     * Property applicationName: The name of the application.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApplicationName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ApplicationConnectionBindProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ApplicationConnectionBindProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ApplicationConnectionBindProps> {
        java.lang.Object connectionIds;
        java.lang.Object applicationGroupName;
        java.lang.Object applicationName;

        /**
         * Sets the value of {@link ApplicationConnectionBindProps#getConnectionIds}
         * @param connectionIds Property connectionIds: The list of connection IDs to bind. This parameter is required.
         *                      The maximum number of connections is 100.
         * @return {@code this}
         */
        public Builder connectionIds(com.aliyun.ros.cdk.core.IResolvable connectionIds) {
            this.connectionIds = connectionIds;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationConnectionBindProps#getConnectionIds}
         * @param connectionIds Property connectionIds: The list of connection IDs to bind. This parameter is required.
         *                      The maximum number of connections is 100.
         * @return {@code this}
         */
        public Builder connectionIds(java.util.List<? extends java.lang.Object> connectionIds) {
            this.connectionIds = connectionIds;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationConnectionBindProps#getApplicationGroupName}
         * @param applicationGroupName Property applicationGroupName: The name of the application group.
         * @return {@code this}
         */
        public Builder applicationGroupName(java.lang.String applicationGroupName) {
            this.applicationGroupName = applicationGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationConnectionBindProps#getApplicationGroupName}
         * @param applicationGroupName Property applicationGroupName: The name of the application group.
         * @return {@code this}
         */
        public Builder applicationGroupName(com.aliyun.ros.cdk.core.IResolvable applicationGroupName) {
            this.applicationGroupName = applicationGroupName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationConnectionBindProps#getApplicationName}
         * @param applicationName Property applicationName: The name of the application.
         * @return {@code this}
         */
        public Builder applicationName(java.lang.String applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationConnectionBindProps#getApplicationName}
         * @param applicationName Property applicationName: The name of the application.
         * @return {@code this}
         */
        public Builder applicationName(com.aliyun.ros.cdk.core.IResolvable applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ApplicationConnectionBindProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ApplicationConnectionBindProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ApplicationConnectionBindProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplicationConnectionBindProps {
        private final java.lang.Object connectionIds;
        private final java.lang.Object applicationGroupName;
        private final java.lang.Object applicationName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.connectionIds = software.amazon.jsii.Kernel.get(this, "connectionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.applicationGroupName = software.amazon.jsii.Kernel.get(this, "applicationGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.applicationName = software.amazon.jsii.Kernel.get(this, "applicationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.connectionIds = java.util.Objects.requireNonNull(builder.connectionIds, "connectionIds is required");
            this.applicationGroupName = builder.applicationGroupName;
            this.applicationName = builder.applicationName;
        }

        @Override
        public final java.lang.Object getConnectionIds() {
            return this.connectionIds;
        }

        @Override
        public final java.lang.Object getApplicationGroupName() {
            return this.applicationGroupName;
        }

        @Override
        public final java.lang.Object getApplicationName() {
            return this.applicationName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("connectionIds", om.valueToTree(this.getConnectionIds()));
            if (this.getApplicationGroupName() != null) {
                data.set("applicationGroupName", om.valueToTree(this.getApplicationGroupName()));
            }
            if (this.getApplicationName() != null) {
                data.set("applicationName", om.valueToTree(this.getApplicationName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.ApplicationConnectionBindProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ApplicationConnectionBindProps.Jsii$Proxy that = (ApplicationConnectionBindProps.Jsii$Proxy) o;

            if (!connectionIds.equals(that.connectionIds)) return false;
            if (this.applicationGroupName != null ? !this.applicationGroupName.equals(that.applicationGroupName) : that.applicationGroupName != null) return false;
            return this.applicationName != null ? this.applicationName.equals(that.applicationName) : that.applicationName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.connectionIds.hashCode();
            result = 31 * result + (this.applicationGroupName != null ? this.applicationGroupName.hashCode() : 0);
            result = 31 * result + (this.applicationName != null ? this.applicationName.hashCode() : 0);
            return result;
        }
    }
}
