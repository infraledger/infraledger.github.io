
import { useState } from "react";
import { Users, MessageCircle, Calendar, TrendingUp, Award, Globe, Building, Briefcase, GraduationCap, Shield, Search, Filter, UserPlus, Bell, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Community = () => {
  const [activeTab, setActiveTab] = useState("discussions");

  const stakeholderGroups = [
    {
      name: "Project Developers",
      icon: <Building className="h-5 w-5" />,
      count: "2,847",
      description: "Developers, sponsors, and project initiators",
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      members: ["Renewable Energy Developers", "Infrastructure Sponsors", "PPP Specialists"]
    },
    {
      name: "Financial Sector", 
      icon: <Briefcase className="h-5 w-5" />,
      count: "1,923",
      description: "Banks, funds, and institutional investors",
      color: "bg-green-500/20 text-green-400 border-green-500/30",
      members: ["Investment Banks", "Infrastructure Funds", "Pension Funds", "Insurance Companies"]
    },
    {
      name: "Engineering & Construction",
      icon: <Shield className="h-5 w-5" />,
      count: "3,156",
      description: "EPC contractors and engineering firms",
      color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      members: ["EPC Contractors", "Design Firms", "Construction Companies", "O&M Providers"]
    },
    {
      name: "Government & Policy",
      icon: <Globe className="h-5 w-5" />,
      count: "892",
      description: "Government agencies and regulatory bodies",
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      members: ["Ministry Officials", "Regulatory Bodies", "Planning Authorities", "SOEs"]
    },
    {
      name: "Research & Academia",
      icon: <GraduationCap className="h-5 w-5" />,
      count: "1,445",
      description: "Universities, think tanks, and NGOs",
      color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      members: ["Research Institutions", "Think Tanks", "NGOs", "Industry Associations"]
    },
    {
      name: "Service Providers",
      icon: <Users className="h-5 w-5" />,
      count: "2,234",
      description: "Legal, consulting, and advisory services",
      color: "bg-pink-500/20 text-pink-400 border-pink-500/30",
      members: ["Legal Firms", "Consulting Firms", "Risk Management", "Market Intelligence"]
    }
  ];

  const discussions = [
    {
      id: 1,
      title: "Green Hydrogen Infrastructure: Scaling Challenges and Solutions",
      author: "Dr. Sarah Chen",
      authorRole: "Energy Transition Lead @ OMV",
      replies: 127,
      views: "12.4k",
      lastActivity: "2h ago",
      tags: ["Green Hydrogen", "Energy Storage", "Policy"],
      featured: true,
      stakeholderGroup: "Project Developers"
    },
    {
      id: 2,
      title: "ESG Compliance in Infrastructure Projects: Best Practices",
      author: "Michael Rodriguez",
      authorRole: "Managing Director @ BlackRock Infrastructure",
      replies: 89,
      views: "8.7k",
      lastActivity: "4h ago",
      tags: ["ESG", "Investment", "Compliance"],
      featured: false,
      stakeholderGroup: "Financial Sector"
    },
    {
      id: 3,
      title: "Digital Twin Technology in Smart City Infrastructure",
      author: "Emma Thompson",
      authorRole: "CTO @ Siemens Smart Infrastructure",
      replies: 156,
      views: "15.2k",
      lastActivity: "6h ago",
      tags: ["Digital Infrastructure", "Smart Cities", "IoT"],
      featured: true,
      stakeholderGroup: "Engineering & Construction"
    },
    {
      id: 4,
      title: "Regulatory Framework Updates for Offshore Wind Development",
      author: "James Park",
      authorRole: "Policy Director @ European Commission",
      replies: 67,
      views: "5.9k",
      lastActivity: "1d ago",
      tags: ["Offshore Wind", "Regulation", "EU Policy"],
      featured: false,
      stakeholderGroup: "Government & Policy"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Infrastructure Finance Roundtable",
      date: "June 15, 2025",
      time: "14:00 UTC",
      attendees: 234,
      host: "Global Infrastructure Hub",
      type: "Virtual Panel",
      tags: ["Finance", "Investment"]
    },
    {
      id: 2,
      title: "Renewable Energy Project Development Masterclass",
      date: "June 20, 2025", 
      time: "10:00 UTC",
      attendees: 567,
      host: "Renewable Energy Association",
      type: "Workshop",
      tags: ["Renewable Energy", "Development"]
    },
    {
      id: 3,
      title: "Digital Infrastructure Security Summit",
      date: "June 25, 2025",
      time: "09:00 UTC",
      attendees: 445,
      host: "Cybersecurity Institute",
      type: "Conference",
      tags: ["Digital", "Security"]
    }
  ];

  const experts = [
    {
      name: "Dr. Maria Santos",
      title: "Chief Infrastructure Officer",
      company: "European Investment Bank",
      expertise: ["PPP", "Green Finance", "Infrastructure Policy"],
      followers: "15.2k",
      posts: 127,
      verified: true
    },
    {
      name: "David Kim",
      title: "Head of Infrastructure",
      company: "Singapore Sovereign Wealth Fund",
      expertise: ["Asset Management", "APAC Markets", "ESG Investment"],
      followers: "8.9k", 
      posts: 89,
      verified: true
    },
    {
      name: "Prof. Anna Petrov",
      title: "Infrastructure Research Director",
      company: "MIT Technology Review",
      expertise: ["Smart Cities", "Digital Infrastructure", "Innovation"],
      followers: "22.1k",
      posts: 203,
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent mb-4">
            Infrastructure Community
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto mb-8">
            Connect with industry leaders, share insights, and shape the future of global infrastructure development
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              12,497 Active Members
            </Badge>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-4 py-2">
              <MessageCircle className="h-4 w-4 mr-2" />
              2,847 Discussions
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              156 Events This Month
            </Badge>
          </div>
        </div>

        {/* Stakeholder Groups */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield className="h-6 w-6 mr-3 text-cyan-400" />
            Community Groups
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stakeholderGroups.map((group, index) => (
              <Card key={index} className={`border-slate-700/50 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/40 transition-all duration-300 cursor-pointer group hover:scale-105`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg border ${group.color}`}>
                      {group.icon}
                    </div>
                    <Badge variant="outline" className="text-white border-slate-600">
                      {group.count} members
                    </Badge>
                  </div>
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                    {group.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm mb-4">{group.description}</p>
                  <div className="space-y-1">
                    {group.members.slice(0, 3).map((member, idx) => (
                      <div key={idx} className="text-xs text-slate-500">• {member}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 space-y-4 lg:space-y-0">
            <TabsList className="grid w-full lg:w-auto grid-cols-4 bg-slate-800/50 border border-slate-700/50">
              <TabsTrigger value="discussions" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                Discussions
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                Events
              </TabsTrigger>
              <TabsTrigger value="experts" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                Experts
              </TabsTrigger>
              <TabsTrigger value="insights" className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400">
                Insights
              </TabsTrigger>
            </TabsList>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  placeholder="Search community..."
                  className="pl-10 w-64 bg-slate-800/50 border-slate-600 text-slate-200"
                />
              </div>
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500">
                <UserPlus className="h-4 w-4 mr-2" />
                Join Community
              </Button>
            </div>
          </div>

          <TabsContent value="discussions" className="space-y-6">
            {discussions.map((discussion) => (
              <Card key={discussion.id} className={`border-slate-700/50 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/40 transition-all duration-300 cursor-pointer ${discussion.featured ? 'ring-1 ring-cyan-500/30' : ''}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {discussion.featured && (
                          <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 text-xs">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                        <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                          {discussion.stakeholderGroup}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-white hover:text-cyan-400 transition-colors mb-2">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="bg-slate-700 text-slate-300 text-xs">
                              {discussion.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <span>{discussion.author}</span>
                          <span className="text-slate-500">•</span>
                          <span className="text-slate-500">{discussion.authorRole}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm text-slate-400">
                      <div>{discussion.lastActivity}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-slate-400">
                      <span className="flex items-center">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {discussion.replies} replies
                      </span>
                      <span className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {discussion.views} views
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {discussion.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-slate-600 text-slate-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            {events.map((event) => (
              <Card key={event.id} className="border-slate-700/50 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {event.date} at {event.time}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {event.attendees} attending
                        </span>
                        <Badge variant="outline" className="border-slate-600 text-slate-300">
                          {event.type}
                        </Badge>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500">
                      Register
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Hosted by {event.host}</span>
                    <div className="flex items-center space-x-2">
                      {event.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-slate-600 text-slate-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="experts" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experts.map((expert, index) => (
              <Card key={index} className="border-slate-700/50 bg-slate-800/30 backdrop-blur-lg hover:bg-slate-800/40 transition-all duration-300">
                <CardHeader className="text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-4">
                    <AvatarFallback className="bg-slate-700 text-slate-300 text-lg">
                      {expert.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center justify-center space-x-2">
                    <h3 className="text-lg font-semibold text-white">{expert.name}</h3>
                    {expert.verified && (
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs">
                        <Award className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-400">{expert.title}</p>
                  <p className="text-sm text-slate-500">{expert.company}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Followers</span>
                      <span className="text-white font-semibold">{expert.followers}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">Posts</span>
                      <span className="text-white font-semibold">{expert.posts}</span>
                    </div>
                    <div className="pt-2">
                      <div className="text-xs text-slate-500 mb-2">Expertise:</div>
                      <div className="flex flex-wrap gap-1">
                        {expert.expertise.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs border-slate-600 text-slate-400">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500">
                      Follow
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <Card className="border-slate-700/50 bg-slate-800/30 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-white">Community Insights Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">$2.8T</div>
                    <div className="text-sm text-slate-400">Global Infrastructure Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">87%</div>
                    <div className="text-sm text-slate-400">ESG Compliance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">156</div>
                    <div className="text-sm text-slate-400">Active Projects Discussed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">92%</div>
                    <div className="text-sm text-slate-400">Member Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
