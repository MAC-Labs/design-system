import { useState } from 'react';
import {
  AlertCircle,
  Bell,
  CheckCircle2,
  FileText,
  Info,
  Layout,
  Settings,
  Users,
  XCircle,
} from 'lucide-react';
import { Alert } from '@/components/design-system/Alert/Alert';
import { Avatar } from '@/components/design-system/Avatar/Avatar';
import { Badge } from '@/components/design-system/Badge/Badge';
import { Breadcrumb } from '@/components/design-system/Breadcrumb/Breadcrumb';
import { Button } from '@/components/design-system/Button/Button';
import { Card } from '@/components/design-system/Card/Card';
import { CardContent } from '@/components/design-system/Card/CardContent';
import { CardHeader } from '@/components/design-system/Card/CardHeader';
import { Drawer } from '@/components/design-system/Drawer/Drawer';
import { Footer } from '@/components/design-system/Footer/Footer';
import { Header } from '@/components/design-system/Header/Header';
import { Hero } from '@/components/design-system/Hero/Hero';
import { Input } from '@/components/design-system/Input/Input';
import { Modal } from '@/components/design-system/Modal/Modal';
import { Progress } from '@/components/design-system/Progress/Progress';
import { Section } from '@/components/design-system/Section/Section';
import { Skeleton } from '@/components/design-system/Skeleton/Skeleton';
import { Tabs } from '@/components/design-system/Tabs/Tabs';
import { Toast } from '@/components/design-system/Toast/Toast';
import { Tooltip } from '@/components/design-system/Tooltip/Tooltip';
import { Typography } from '@/components/design-system/Typography/Typography';
import { useToast } from '@/hooks/useToast';

function App() {
  // Modal states
  const [isSmallModalOpen, setIsSmallModalOpen] = useState(false);
  const [isMediumModalOpen, setIsMediumModalOpen] = useState(false);
  const [isLargeModalOpen, setIsLargeModalOpen] = useState(false);

  // Drawer states
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  // Toast hook
  const { toasts, show: showToast, close: closeToast } = useToast();

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-16 space-y-16">
        {/* Typography Section */}
        <Section title="Typography" description="Text styles for various purposes">
          <div className="space-y-4">
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="body1">Body 1 - Main content text</Typography>
            <Typography variant="body2">Body 2 - Secondary content text</Typography>
            <Typography variant="caption">Caption - Small helper text</Typography>
          </div>
        </Section>

        {/* Buttons Section */}
        <Section title="Buttons" description="Interactive button components">
          <div className="flex flex-wrap gap-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="tertiary">Tertiary Button</Button>
            <Button size="sm">Small Button</Button>
            <Button size="lg">Large Button</Button>
            <Button disabled>Disabled Button</Button>
          </div>
        </Section>

        {/* Cards Section */}
        <Section title="Cards" description="Container components for content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Typography variant="h4">Default Card</Typography>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">Basic card content</Typography>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardHeader>
                <Typography variant="h4">Outlined Card</Typography>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">Card with border</Typography>
              </CardContent>
            </Card>
            <Card variant="gradient">
              <CardHeader>
                <Typography variant="h4">Gradient Card</Typography>
              </CardHeader>
              <CardContent>
                <Typography variant="body2">Card with gradient background</Typography>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* Modals Section */}
        <Section title="Modals" description="Dialog windows for focused interactions">
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => setIsSmallModalOpen(true)}>Small Modal</Button>
            <Button onClick={() => setIsMediumModalOpen(true)}>Medium Modal</Button>
            <Button onClick={() => setIsLargeModalOpen(true)}>Large Modal</Button>
          </div>
        </Section>

        {/* Drawers Section */}
        <Section title="Drawers" description="Slide-out panels for additional content">
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => setIsLeftDrawerOpen(true)}>Left Drawer</Button>
            <Button onClick={() => setIsRightDrawerOpen(true)}>Right Drawer</Button>
          </div>
        </Section>

        {/* Alerts Section */}
        <Section title="Alerts" description="Informative message components">
          <div className="space-y-4">
            <Alert variant="info" title="Information">
              This is an informative message.
            </Alert>
            <Alert variant="success" title="Success">
              Operation completed successfully.
            </Alert>
            <Alert variant="warning" title="Warning">
              Please review before proceeding.
            </Alert>
            <Alert variant="error" title="Error">
              An error occurred during the process.
            </Alert>
          </div>
        </Section>

        {/* Badges Section */}
        <Section title="Badges" description="Label and status indicators">
          <div className="flex flex-wrap gap-4">
            <Badge>Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        </Section>

        {/* Progress Section */}
        <Section title="Progress" description="Progress indicators">
          <div className="space-y-4">
            <Progress value={25} />
            <Progress value={50} variant="primary" />
            <Progress value={75} variant="success" />
            <Progress value={100} size="lg" />
          </div>
        </Section>

        {/* Avatar Section */}
        <Section title="Avatars" description="User profile pictures">
          <div className="flex flex-wrap gap-4">
            <Avatar size="sm" />
            <Avatar size="md" status="online" />
            <Avatar size="lg" status="busy" />
            <Avatar src="https://i.pravatar.cc/300" alt="User" />
          </div>
        </Section>

        {/* Tooltips Section */}
        <Section title="Tooltips" description="Hover information displays">
          <div className="flex flex-wrap gap-4">
            <Tooltip content="Top tooltip">
              <Button>Hover me (Top)</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" position="right">
              <Button>Hover me (Right)</Button>
            </Tooltip>
          </div>
        </Section>

        {/* Breadcrumb Section */}
        <Section title="Breadcrumbs" description="Navigation path indicators">
          <Breadcrumb
            items={[
              { label: 'Components', href: '#' },
              { label: 'Navigation', href: '#' },
              { label: 'Breadcrumb' },
            ]}
          />
        </Section>

        {/* Skeleton Section */}
        <Section title="Skeletons" description="Loading state placeholders">
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <div className="flex gap-4">
              <Skeleton variant="circular" width={40} height={40} />
              <div className="space-y-2 flex-1">
                <Skeleton variant="text" className="w-1/4" />
                <Skeleton variant="text" className="w-3/4" />
              </div>
            </div>
          </div>
        </Section>

        {/* Tabs Section */}
        <Section title="Tabs" description="Content organization tabs">
          <Tabs
            items={[
              { id: 'tab1', label: 'Tab 1', content: 'Content for Tab 1' },
              { id: 'tab2', label: 'Tab 2', content: 'Content for Tab 2' },
              { id: 'tab3', label: 'Tab 3', content: 'Content for Tab 3' },
            ]}
          />
        </Section>

        {/* Toast Section */}
        <Section title="Toasts" description="Notification messages">
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => showToast('Default toast message')}>
              Show Default Toast
            </Button>
            <Button onClick={() => showToast('Success message', { variant: 'success' })}>
              Show Success Toast
            </Button>
            <Button onClick={() => showToast('Error message', { variant: 'error' })}>
              Show Error Toast
            </Button>
          </div>
        </Section>
      </main>

      <Footer />

      {/* Modals */}
      <Modal
        isOpen={isSmallModalOpen}
        onClose={() => setIsSmallModalOpen(false)}
        title="Small Modal"
        size="sm"
      >
        <Typography>This is a small modal dialog.</Typography>
      </Modal>

      <Modal
        isOpen={isMediumModalOpen}
        onClose={() => setIsMediumModalOpen(false)}
        title="Medium Modal"
        size="md"
      >
        <Typography>This is a medium-sized modal dialog with more content space.</Typography>
      </Modal>

      <Modal
        isOpen={isLargeModalOpen}
        onClose={() => setIsLargeModalOpen(false)}
        title="Large Modal"
        size="lg"
      >
        <Typography>This is a large modal dialog with maximum content space.</Typography>
      </Modal>

      {/* Drawers */}
      <Drawer
        isOpen={isLeftDrawerOpen}
        onClose={() => setIsLeftDrawerOpen(false)}
        position="left"
        title="Left Drawer"
      >
        <Typography>This is a left-side drawer panel.</Typography>
      </Drawer>

      <Drawer
        isOpen={isRightDrawerOpen}
        onClose={() => setIsRightDrawerOpen(false)}
        position="right"
        title="Right Drawer"
      >
        <Typography>This is a right-side drawer panel.</Typography>
      </Drawer>

      {/* Toasts */}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          variant={toast.variant}
          duration={toast.duration}
          onClose={() => closeToast(toast.id)}
        />
      ))}
    </div>
  );
}

export default App;