package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a <code>RosTraceResource</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-traceresource
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T07:12:12.757Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosTraceResourceProps")
@software.amazon.jsii.Jsii.Proxy(RosTraceResourceProps.Jsii$Proxy.class)
public interface RosTraceResourceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreateAllResource() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkspace() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTraceResourceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTraceResourceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTraceResourceProps> {
        java.lang.Object appType;
        java.lang.Object createAllResource;
        java.lang.Object workspace;

        /**
         * Sets the value of {@link RosTraceResourceProps#getAppType}
         * @param appType the value to be set.
         * @return {@code this}
         */
        public Builder appType(java.lang.String appType) {
            this.appType = appType;
            return this;
        }

        /**
         * Sets the value of {@link RosTraceResourceProps#getAppType}
         * @param appType the value to be set.
         * @return {@code this}
         */
        public Builder appType(com.aliyun.ros.cdk.core.IResolvable appType) {
            this.appType = appType;
            return this;
        }

        /**
         * Sets the value of {@link RosTraceResourceProps#getCreateAllResource}
         * @param createAllResource the value to be set.
         * @return {@code this}
         */
        public Builder createAllResource(java.lang.Boolean createAllResource) {
            this.createAllResource = createAllResource;
            return this;
        }

        /**
         * Sets the value of {@link RosTraceResourceProps#getCreateAllResource}
         * @param createAllResource the value to be set.
         * @return {@code this}
         */
        public Builder createAllResource(com.aliyun.ros.cdk.core.IResolvable createAllResource) {
            this.createAllResource = createAllResource;
            return this;
        }

        /**
         * Sets the value of {@link RosTraceResourceProps#getWorkspace}
         * @param workspace the value to be set.
         * @return {@code this}
         */
        public Builder workspace(java.lang.String workspace) {
            this.workspace = workspace;
            return this;
        }

        /**
         * Sets the value of {@link RosTraceResourceProps#getWorkspace}
         * @param workspace the value to be set.
         * @return {@code this}
         */
        public Builder workspace(com.aliyun.ros.cdk.core.IResolvable workspace) {
            this.workspace = workspace;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTraceResourceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTraceResourceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTraceResourceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTraceResourceProps {
        private final java.lang.Object appType;
        private final java.lang.Object createAllResource;
        private final java.lang.Object workspace;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appType = software.amazon.jsii.Kernel.get(this, "appType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.createAllResource = software.amazon.jsii.Kernel.get(this, "createAllResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspace = software.amazon.jsii.Kernel.get(this, "workspace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appType = builder.appType;
            this.createAllResource = builder.createAllResource;
            this.workspace = builder.workspace;
        }

        @Override
        public final java.lang.Object getAppType() {
            return this.appType;
        }

        @Override
        public final java.lang.Object getCreateAllResource() {
            return this.createAllResource;
        }

        @Override
        public final java.lang.Object getWorkspace() {
            return this.workspace;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAppType() != null) {
                data.set("appType", om.valueToTree(this.getAppType()));
            }
            if (this.getCreateAllResource() != null) {
                data.set("createAllResource", om.valueToTree(this.getCreateAllResource()));
            }
            if (this.getWorkspace() != null) {
                data.set("workspace", om.valueToTree(this.getWorkspace()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.RosTraceResourceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTraceResourceProps.Jsii$Proxy that = (RosTraceResourceProps.Jsii$Proxy) o;

            if (this.appType != null ? !this.appType.equals(that.appType) : that.appType != null) return false;
            if (this.createAllResource != null ? !this.createAllResource.equals(that.createAllResource) : that.createAllResource != null) return false;
            return this.workspace != null ? this.workspace.equals(that.workspace) : that.workspace == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appType != null ? this.appType.hashCode() : 0;
            result = 31 * result + (this.createAllResource != null ? this.createAllResource.hashCode() : 0);
            result = 31 * result + (this.workspace != null ? this.workspace.hashCode() : 0);
            return result;
        }
    }
}
