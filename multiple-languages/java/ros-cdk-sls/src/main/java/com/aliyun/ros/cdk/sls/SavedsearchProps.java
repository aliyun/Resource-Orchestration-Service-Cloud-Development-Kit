package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a `ALIYUN::SLS::Savedsearch`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:03.718Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.SavedsearchProps")
@software.amazon.jsii.Jsii.Proxy(SavedsearchProps.Jsii$Proxy.class)
public interface SavedsearchProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property detail:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDetail();

    /**
     * Property project: Project name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProject();

    /**
     * @return a {@link Builder} of {@link SavedsearchProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SavedsearchProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SavedsearchProps> {
        java.lang.Object detail;
        java.lang.Object project;

        /**
         * Sets the value of {@link SavedsearchProps#getDetail}
         * @param detail Property detail:. This parameter is required.
         * @return {@code this}
         */
        public Builder detail(com.aliyun.ros.cdk.core.IResolvable detail) {
            this.detail = detail;
            return this;
        }

        /**
         * Sets the value of {@link SavedsearchProps#getDetail}
         * @param detail Property detail:. This parameter is required.
         * @return {@code this}
         */
        public Builder detail(com.aliyun.ros.cdk.sls.RosSavedsearch.DetailProperty detail) {
            this.detail = detail;
            return this;
        }

        /**
         * Sets the value of {@link SavedsearchProps#getProject}
         * @param project Property project: Project name. This parameter is required.
         * @return {@code this}
         */
        public Builder project(java.lang.String project) {
            this.project = project;
            return this;
        }

        /**
         * Sets the value of {@link SavedsearchProps#getProject}
         * @param project Property project: Project name. This parameter is required.
         * @return {@code this}
         */
        public Builder project(com.aliyun.ros.cdk.core.IResolvable project) {
            this.project = project;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SavedsearchProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SavedsearchProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SavedsearchProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SavedsearchProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.SavedsearchProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SavedsearchProps.Jsii$Proxy that = (SavedsearchProps.Jsii$Proxy) o;

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
