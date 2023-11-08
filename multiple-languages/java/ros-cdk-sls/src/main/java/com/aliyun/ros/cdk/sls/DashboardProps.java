package com.aliyun.ros.cdk.sls;

/**
 * Properties for defining a <code>ALIYUN::SLS::Dashboard</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.341Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.DashboardProps")
@software.amazon.jsii.Jsii.Proxy(DashboardProps.Jsii$Proxy.class)
public interface DashboardProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property charts: Chart list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCharts();

    /**
     * Property dashboardName: Dashboard name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDashboardName();

    /**
     * Property projectName: Project name: 1.
     * <p>
     * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectName();

    /**
     * Property description: Dashboard description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property displayName: Dashboard display name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisplayName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DashboardProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DashboardProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DashboardProps> {
        java.lang.Object charts;
        java.lang.Object dashboardName;
        java.lang.Object projectName;
        java.lang.Object description;
        java.lang.Object displayName;

        /**
         * Sets the value of {@link DashboardProps#getCharts}
         * @param charts Property charts: Chart list. This parameter is required.
         * @return {@code this}
         */
        public Builder charts(com.aliyun.ros.cdk.core.IResolvable charts) {
            this.charts = charts;
            return this;
        }

        /**
         * Sets the value of {@link DashboardProps#getCharts}
         * @param charts Property charts: Chart list. This parameter is required.
         * @return {@code this}
         */
        public Builder charts(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> charts) {
            this.charts = charts;
            return this;
        }

        /**
         * Sets the value of {@link DashboardProps#getDashboardName}
         * @param dashboardName Property dashboardName: Dashboard name. This parameter is required.
         * @return {@code this}
         */
        public Builder dashboardName(java.lang.String dashboardName) {
            this.dashboardName = dashboardName;
            return this;
        }

        /**
         * Sets the value of {@link DashboardProps#getDashboardName}
         * @param dashboardName Property dashboardName: Dashboard name. This parameter is required.
         * @return {@code this}
         */
        public Builder dashboardName(com.aliyun.ros.cdk.core.IResolvable dashboardName) {
            this.dashboardName = dashboardName;
            return this;
        }

        /**
         * Sets the value of {@link DashboardProps#getProjectName}
         * @param projectName Property projectName: Project name: 1. This parameter is required.
         *                    Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                    2. Must start and end with lowercase letters and numbers.
         *                    3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder projectName(java.lang.String projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link DashboardProps#getProjectName}
         * @param projectName Property projectName: Project name: 1. This parameter is required.
         *                    Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         *                    2. Must start and end with lowercase letters and numbers.
         *                    3. The name length is 3-63 characters.
         * @return {@code this}
         */
        public Builder projectName(com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.projectName = projectName;
            return this;
        }

        /**
         * Sets the value of {@link DashboardProps#getDescription}
         * @param description Property description: Dashboard description.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DashboardProps#getDescription}
         * @param description Property description: Dashboard description.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DashboardProps#getDisplayName}
         * @param displayName Property displayName: Dashboard display name.
         * @return {@code this}
         */
        public Builder displayName(java.lang.String displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Sets the value of {@link DashboardProps#getDisplayName}
         * @param displayName Property displayName: Dashboard display name.
         * @return {@code this}
         */
        public Builder displayName(com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.displayName = displayName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DashboardProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DashboardProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DashboardProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DashboardProps {
        private final java.lang.Object charts;
        private final java.lang.Object dashboardName;
        private final java.lang.Object projectName;
        private final java.lang.Object description;
        private final java.lang.Object displayName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.charts = software.amazon.jsii.Kernel.get(this, "charts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dashboardName = software.amazon.jsii.Kernel.get(this, "dashboardName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectName = software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.displayName = software.amazon.jsii.Kernel.get(this, "displayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.charts = java.util.Objects.requireNonNull(builder.charts, "charts is required");
            this.dashboardName = java.util.Objects.requireNonNull(builder.dashboardName, "dashboardName is required");
            this.projectName = java.util.Objects.requireNonNull(builder.projectName, "projectName is required");
            this.description = builder.description;
            this.displayName = builder.displayName;
        }

        @Override
        public final java.lang.Object getCharts() {
            return this.charts;
        }

        @Override
        public final java.lang.Object getDashboardName() {
            return this.dashboardName;
        }

        @Override
        public final java.lang.Object getProjectName() {
            return this.projectName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDisplayName() {
            return this.displayName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("charts", om.valueToTree(this.getCharts()));
            data.set("dashboardName", om.valueToTree(this.getDashboardName()));
            data.set("projectName", om.valueToTree(this.getProjectName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDisplayName() != null) {
                data.set("displayName", om.valueToTree(this.getDisplayName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sls.DashboardProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DashboardProps.Jsii$Proxy that = (DashboardProps.Jsii$Proxy) o;

            if (!charts.equals(that.charts)) return false;
            if (!dashboardName.equals(that.dashboardName)) return false;
            if (!projectName.equals(that.projectName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.displayName != null ? this.displayName.equals(that.displayName) : that.displayName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.charts.hashCode();
            result = 31 * result + (this.dashboardName.hashCode());
            result = 31 * result + (this.projectName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.displayName != null ? this.displayName.hashCode() : 0);
            return result;
        }
    }
}
