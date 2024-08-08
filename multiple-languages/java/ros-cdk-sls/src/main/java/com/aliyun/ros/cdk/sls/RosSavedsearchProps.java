package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a <code>RosSavedsearch</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-savedsearch
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:14.396Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosSavedsearchProps")
@software.amazon.jsii.Jsii.Proxy(RosSavedsearchProps.Jsii$Proxy.class)
public interface RosSavedsearchProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDetail();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProject();

    /**
     * @return a {@link Builder} of {@link RosSavedsearchProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSavedsearchProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSavedsearchProps> {
        java.lang.Object detail;
        java.lang.Object project;

        /**
         * Sets the value of {@link RosSavedsearchProps#getDetail}
         * @param detail the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder detail(com.aliyun.ros.cdk.core.IResolvable detail) {
            this.detail = detail;
            return this;
        }

        /**
         * Sets the value of {@link RosSavedsearchProps#getDetail}
         * @param detail the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder detail(com.aliyun.ros.cdk.sls.RosSavedsearch.DetailProperty detail) {
            this.detail = detail;
            return this;
        }

        /**
         * Sets the value of {@link RosSavedsearchProps#getProject}
         * @param project the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder project(java.lang.String project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link RosSavedsearchProps#getProject}
         * @param project the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
            this.project = project;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSavedsearchProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSavedsearchProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSavedsearchProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSavedsearchProps {
        private final java.lang.Object detail;
        private final java.lang.Object project;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.detail = software.amazon.jsii.Kernel.get(this, "detail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.project = software.amazon.jsii.Kernel.get(this, "project", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.detail = java.util.Objects.requireNonNull(builder.detail, "detail is required");
            this.project = java.util.Objects.requireNonNull(builder.project, "project is required");
        }

        @Override
        public final java.lang.Object getDetail() {
            return this.detail;
        }

        @Override
        public final java.lang.Object getProject() {
            return this.project;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("detail", om.valueToTree(this.getDetail()));
            data.set("project", om.valueToTree(this.getProject()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.RosSavedsearchProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSavedsearchProps.Jsii$Proxy that = (RosSavedsearchProps.Jsii$Proxy) o;

            if (!detail.equals(that.detail)) return false;
            return this.project.equals(that.project);
        }

        @Override
        public final int hashCode() {
            int result = this.detail.hashCode();
            result = 31 * result + (this.project.hashCode());
            return result;
        }
    }
}
